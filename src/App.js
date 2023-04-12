import { useState, useEffect } from "react";

import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";
import { async } from "q";

const App = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const responce = await fetch("http://localhost:8000/product");

      const responseData = await responce.json();

      setProduct(responseData);
    };

    sendRequest();
  }, []);

  const AddProduct = async (title) => {
    const responce = await fetch("http://localhost:8000/product", {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: JSON.stringify(title),
    });

    const responseData = await responce.JSON();

    setProduct([...products, responseData]);
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:8000/product/${id}`, {
      method: "DELETE",
    });

    setProduct(products.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <AddProduct onAdd={AddProduct} />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
};

export default App;

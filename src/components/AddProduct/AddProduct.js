import "./AddProduct.css";

const AddProduct = () => {
  return (
    <div>
      <form className="add-product-form">
        <div className="form-control">
          <input type="text" placeholder="Add Product"></input>
        </div>
        <button type="submit" className="from-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

// import RealatedProducts from "./RealatedProducts/RealatedProducts";
// import img from "../../assets/singleimg1.jpeg";
import "./SingleProducts.css";
import useFetch from "../../hooks/useFetch";
import { NavLink, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../utils/Context";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const SingleProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);
  const product = data?.data?.[0];

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  if (!product) {
    return <div className="text-center py-5">Loading product...</div>;
  }

  return (
    <div className="container gx-0 py-4 single_Product_main">
      <div className="row gx-0 py-2 align-items-center">
        <div className="col-md-6">
          <div className="singleProduct1">
            <img
              src={`http://localhost:1337${product.img?.url}`}
              alt={product.title}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="single_Product2">
            <h2 className="single_Product-title">{product.title}</h2>
            <h3 className="single_Product-price">$ {product.price}</h3>
            <p className="single_Product-description">{product.description}</p>
            <div className="carts-button">
              <div className="quality-buttons my-4 py-3">
                <span className="single-span" onClick={decrement}>
                  -
                </span>
                <span className="single-span">{quantity}</span>
                <span className="single-span" onClick={increment}>
                  +
                </span>
              </div>
              <button
                className="main_btn1 py-3"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                }}
              >
                <i className="fa-solid fa-cart-shopping pe-2 fs-5"></i>
                Add To Cart
              </button>
              <hr />
              <div className="single-category py-2">
                <span className="fw-bold fs-6">Category :</span>
                <span className="ps-1">
                  {product.categories?.[0]?.title || "N/A"}
                </span>
              </div>
              <div className="single-category py-2">
                <span className="fw-bold fs-6">Brand :</span>
                <span className="ps-1">
                  {product.brands?.[0]?.title || "N/A"}
                </span>
              </div>
              <div className="single-social py-2">
                <span className="fw-bold fs-6">Share :</span>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts
        productId={id}
        categoryId={product?.categories?.[0]?.id}
      />
    </div>
  );
};

export default SingleProducts;

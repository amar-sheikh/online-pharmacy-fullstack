import { useNavigate } from "react-router-dom";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className="Product_main">
      <div className="col" onClick={() => navigate("/product/" + id)}>
        <div className="card border-0 h-100">
          <div className="card_head">
            <img
              src={`http://localhost:1337${
                data.img.formats?.small?.url || data.img.url
              }`}
              alt={data.title}
              className="img-product"
            />
          </div>
          <div className="card-body">
            <h5 className="Product_name">{data.title}</h5>
            {data.rating && (
              <div className="icons py-2">
                <i className="fa-solid fa-star"></i>
                <p>{data.rating}</p>
              </div>
            )}
            <h4 className="Product_price">$ {data.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

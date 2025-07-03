import React from "react";
import { useNavigate } from "react-router-dom";
import "./Brand.css";

const Brand = ({ brand }) => {
  const navigate = useNavigate();

  return (
    <div className="carousel-container">
      <h4 className="main_h2 py-5">Top Brands</h4>
      <div className="carousel">
        {brand?.data?.map((item, index) => (
          <div
            key={item.id}
            className="carousel__item"
            style={{ "--i": index }}
            onClick={() => navigate(`/brand/${item.id}`)}
          >
            <img
              src={`http://localhost:1337${item.img?.url}`}
              alt={item.title || "Brand"}
              className="carousel-image"
            />
            <h4 className="Brand_title">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;

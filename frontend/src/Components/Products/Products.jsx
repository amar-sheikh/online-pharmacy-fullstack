import React from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Products.css";

const Products = ({ products }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const normalizedProducts = products?.data || products || [];

  const visibleProducts = isHomePage
    ? normalizedProducts.filter((item) => item.rating)
    : normalizedProducts;

  return (
    <div className="container gx-0 py-5">
      {isHomePage && (
        <h2 className="Product_h2 pb-5 main_h2">Popular Products</h2>
      )}
      <div className="row gx-0">
        <div className="col-md-12">
          {visibleProducts.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              slidesPerView={4}
              breakpoints={{
                320: { slidesPerView: 2 },
                568: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
              }}
              className="Products_main mobile-left-margin "
            >
              {visibleProducts.map((item) => (
                <SwiperSlide key={item.id}>
                  <Product id={item.id} data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

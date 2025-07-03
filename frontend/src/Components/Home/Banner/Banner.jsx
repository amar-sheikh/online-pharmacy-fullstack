import "./Banner.css";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div className="banner_main">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container-fluid Banner_1 py-5">
            <div className="container gx-0">
              <div className="row gx-0 align-items-center">
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="banner_col1 pt-md-4">
                    <h1>
                      Reliable <span>Healthcare</span>, Anytime{" "}
                      <span>Anywhere</span>
                    </h1>
                    <p>
                      Welcome to our trusted online medical store, where
                      healthcare meets convenience. We offer a wide range of
                      genuine medicines, wellness products, and healthcare
                      essentials—all delivered right to your doorstep. Our
                      licensed pharmacists ensure every order is safe, verified,
                      and handled with care. Shop with confidence and experience
                      hassle-free, reliable service for all your medical needs.
                    </p>
                    <div className="bannerbtns py-3">
                      <button className="main_btn" onClick={handleClick}>
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="banner_col2">
                    <img src={img1} alt="Slide 1" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container-fluid Banner_2 py-5">
            <div className="container gx-0">
              <div className="row gx-0 align-items-start">
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="banner_col1 pt-md-4">
                    <h1>
                      Complete <span>Care</span> for Every <span>Organ</span>
                    </h1>
                    <p>
                      Your body deserves complete care—from the heart to every
                      vital organ. We provide trusted medicines, supplements,
                      and healthcare tools to support your entire system.
                      Whether it's cardiovascular health, immunity, or daily
                      wellness, we've got you covered. Stay strong, stay
                      protected—with medical support that cares for every part
                      of you.
                    </p>
                    <div className="bannerbtns py-3">
                      <button className="main_btn">Shop Now</button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="banner_col2">
                    <img src={img2} alt="Slide 2" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

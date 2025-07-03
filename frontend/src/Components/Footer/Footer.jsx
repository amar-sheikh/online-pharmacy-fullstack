import logo from "../../assets/logo.jpg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer py-5">
      <div className="container gr-0">
        <div className="row gx-0">
          <div className="col-md-3">
            <div className="footer_col1">
              <img src={logo} alt="" className="site-logo" />
              <div className="ft_icons py-3">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <p className="pb-4">@2025 Copyright. All Right Reserved</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_col2">
              <h5 className="ft_h5">Get to Know Us</h5>
              <ul>
                <li className="nav_li">
                  <NavLink className="text-decoration-none">About Us</NavLink>
                </li>
                <li className="nav_li">
                  <NavLink className="text-decoration-none">Careers</NavLink>
                </li>
                <li className="nav_li">
                  <NavLink className="text-decoration-none">
                    Health Products
                  </NavLink>
                </li>
                <li className="nav_li">
                  <NavLink className="text-decoration-none">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_col2">
              <h5 className="ft_h5">Orders and Returns</h5>
              <ul>
                <li className="nav_li">
                  <NavLink className="text-decoration-none">
                    Shipping & Delivery
                  </NavLink>
                </li>
                <li className="nav_li">
                  <NavLink className="text-decoration-none">
                    Return & Exchange
                  </NavLink>
                </li>
                <li className="nav_li">
                  <NavLink className="text-decoration-none">
                    Track Order
                  </NavLink>
                </li>
                <li className="nav_li">
                  <NavLink className="text-decoration-none">Payment</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_col3">
              <h5 className="ft_h5">Contact</h5>
              <p className="py-2">
                <i className="fa-solid fa-phone"></i> +444 212 333 65
              </p>
              <p className="py-2">
                <i className="fa-solid fa-envelope"></i> support@yourstore.com
              </p>
              <p className="py-2">
                <i className="fa-solid fa-location-dot"></i> 321 Main Street,
                City Abc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

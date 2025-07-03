import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../utils/Context";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";

const Header = () => {
  const [scrolled, setscrolled] = useState(false);
  const [search, setSearch] = useState(false);
  const [ShowCart, setShowCart] = useState(false);

  const { cartCount } = useContext(Context);

  const HandleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg nav_sec1 ${
          scrolled ? "sticky_nav1" : ""
        }`}
      >
        <div className="container gx-0">
          <NavLink to="/">
            <img src={logo} alt="logo" className="site-logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/13944/13944814.png"
              width="26"
              height="26"
              title=""
              className="img-small"
              alt=""
            />
          </button>
          <div
            className="collapse navbar-collapse py-md-0 py-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-lg-0 nav_ul py-3 py-md-0">
              <li className="nav_li">
                <NavLink to="/">Homepage</NavLink>
              </li>
              <li className="nav_li">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav_li">
                <NavLink to="/products">Health Products</NavLink>
              </li>
              <li className="nav_li">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            <form className="cart1 d-flex align-items-center mx-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1040/1040225.png"
                width="26"
                height="26"
                alt=""
                data-bs-toggle="modal"
                data-bs-target="#examplemodal"
                onClick={() => {
                  setSearch(true);
                  document
                    .querySelector(".navbar-collapse.show")
                    ?.classList.remove("show");
                }}
                className={`img-small mx-3 ${scrolled ? "d-none" : ""}`}
              ></img>
              <NavLink to="">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4903/4903878.png"
                  width="26"
                  height="26"
                  alt=""
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  onClick={() => setShowCart(true)}
                  className="img-small"
                ></img>
                {!!cartCount && (
                  <span className="cart-total--item">{cartCount}</span>
                )}
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
      {ShowCart && <Cart setShowCart={setShowCart} />}
      <Search setSearch={setSearch} />
      {/* {search && <Search setSearch={setSearch} />} */}
    </>
  );
};

export default Header;

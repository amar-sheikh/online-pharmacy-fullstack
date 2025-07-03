import "./OrderMethod.css";
import img from "../../../assets/shipping .jpg";
import img1 from "../../../assets/shipping1.jpg";
import img2 from "../../../assets/support.jpeg";

const OrderMethod = () => {
  return (
    <div className="Order">
      <div className="container gx-0 py-0 py-md-5">
        <div className="row gx-0 align-items-center">
          <div className="col-md-4 col-6">
            <div className="order_col1">
              <img src={img} alt="" className="img-fluid" />
              <h5>Free Shipping</h5>
              <p>
                Enjoy fast and free delivery on all orders without minimum
                purchase.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="order_col1">
              <img src={img1} alt="" className="img-fluid" />
              <h5>Trusted And Secure Pharmacy</h5>
              <p>
                All medicines are 100% genuine and sourced from verified
                suppliers.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="order_col1">
              <img src={img2} alt="" className="img-fluid" />
              <h5>24/7 Support</h5>
              <p>
                Our customer support is available around the clock for any
                queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMethod;

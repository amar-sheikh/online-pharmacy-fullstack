import img from "../../../assets/categories/Home_Main.png";
import "./Category.css";
import { useNavigate } from "react-router-dom";

const Category = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div className="container gx-0 py-5 my-5 Full_main_category">
      <h4 className="p-m-3 main_h2">Top Categories</h4>
      <div className="row gx-3 gy-4 main_category">
        {category?.data?.map((item) => {
          return (
            <div key={item.id} className="col-md-2 col-6 d-flex">
              <div
                className="home_category text-center flex-fill"
                onClick={() => navigate(`/category/${item.id}`)}
              >
                <img
                  src={`http://localhost:1337${item.img.url}`}
                  alt=""
                  className="img-category"
                />
                <h4 className="Category_title">{item?.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

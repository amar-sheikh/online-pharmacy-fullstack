import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Brand from "./Brand/Brand";
import OrderMethod from "./OrderMethod/OrderMethod";
import { FetchDataFromApi } from "../../utils/api";
import { useEffect, useContext } from "react";
import { Context } from "../../utils/Context";

const Home = () => {
  const { category, setCategory, products, setProducts, brand, setBrand } =
    useContext(Context);

  useEffect(() => {
    getCategory();
    getProducts();
    getBrand();
  }, []);

  const getCategory = () => {
    FetchDataFromApi("/api/catergories?populate=*").then((res) => {
      // console.log(res);
      setCategory(res);
    });
  };

  const getProducts = () => {
    FetchDataFromApi("/api/products?populate=*").then((res) => {
      // console.log(res);
      setProducts(res);
    });
  };

  const getBrand = () => {
    FetchDataFromApi("/api/brands?populate=*").then((res) => {
      // console.log(res);
      setBrand(res);
    });
  };

  return (
    <div>
      <Banner />
      <Category category={category} />
      <Products products={products} />
      <Brand brand={brand} />
      <div className="section1 py-5">
        <OrderMethod />
      </div>
    </div>
  );
};

export default Home;

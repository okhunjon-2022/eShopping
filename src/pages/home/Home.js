import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
// import Slider from "../../components/slider/Slider";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      {/* <Slider/> */}
      <Categories />
      <Products />
    </div>
  );
}

export default Home;

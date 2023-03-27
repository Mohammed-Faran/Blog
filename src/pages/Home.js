import React from "react";
import BlogSection from "../component/BlogSection";
import FilterSection from "../component/FilterSection";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FilterSection />
      <BlogSection />
    </div>
  );
};

export default Home;

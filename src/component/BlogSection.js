import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { BLOG_DATA } from "../utils";
import BlogCard from "./BlogCard";
import { useSelector, useDispatch } from "react-redux";
import { reSetFilter, setBlogList, setFilter } from "../store/blogSlice";

const BlogSection = ({ className }) => {
  const { filter, blogList } = useSelector((state) => state);
  const [searchTextLocal, setSearchTextLocal] = useState(filter?.bySearchText);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(setBlogList(BLOG_DATA));
    // eslint-disable-next-line
  }, []);
  const handleChange = (val) => {
    dispatch(reSetFilter());
    setSearchTextLocal(val);
    dispatch(
      setFilter({
        byCategory: [],
        byAuthor: [],
        byPublishTime: "",
        bySearchText: val,
      })
    );
    const filteredData = BLOG_DATA?.filter((item) =>
      item?.title?.includes(val)
    );
    dispatch(setBlogList(filteredData));
  };

  return (
    <div className={className + " text-center"}>
      <div className="text-start mt-5 ml-4 flex justify-between">
        {/* <input
          className="border-cyan-800 p-2 bg-gray-500 w-96"
          type="text"
          name="search-box"
          id="search-box"
          value={searchTextLocal}
          onChange={(e) => handleChange(e.target.value)}
        /> */}
        <button className="ml-auto mr-5 p-3 rounded-md bg-purple-900 text-white text-center" onClick={() => {navigate('/create-new-blog')}}>
          CREATE NEW
        </button>
      </div>
      <div className="p-5">
      <div className="flex flex-wrap gap-5 w-full justify-center">
        {blogList?.map((item) => {
          return (
            <BlogCard
              imageSrc={item?.imageSrc}
              title={item?.title}
              category={item?.category}
              description={item?.description}
              key={item?.id}
            />
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default BlogSection;

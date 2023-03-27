import React from "react";

const BlogCard = ({ imageSrc, title, category, description }) => {
  return (
    <div className="border-2 w-[450px]">
      <div className="flex flex-col font-sans flex-wrap">
        <div className="flex-non w-full h-60 relativ">
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6 flex-wrap">
          <div className="flex flex-wrap text-left">
            <h1 className="flex-auto text-2xl font-semibold text-slate-900">
              {title}
            </h1>
            <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
              Category
            </div>
            <div className="flex gap-5 mt-2">
              {category?.map((item) => {
                return (
                  <span className="w-fit px-3 h-9 rounded-lg flex items-center justify-center peer-checked:font-semibold bg-purple-900 text-white">
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
          <p className="text-sm text-slate-700 text-left">
            <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
              Description
            </div>
            {description}
            <button>Learn More</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default BlogCard;

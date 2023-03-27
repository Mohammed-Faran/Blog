import React, { useEffect, useState } from "react";
import {
  AUTHOR_NAMES,
  BLOG_DATA,
  CATEGORY_NAMES,
  FILTER_BY_DATE_OPTIONS,
} from "../utils";
import MultiCheckbox from "./MultiCheckbox";
import { useSelector, useDispatch } from "react-redux";
import { reSetFilter, setBlogList, setFilter } from "../store/blogSlice";

const FilterSection = () => {
  const { filter } = useSelector((state) => state);
  const [searchByCategoryLocal, setSearchByCategoryLocal] = useState(
    filter.byCategory
  );
  const [searchByAuthorLocal, setSearchByAuthorLocal] = useState(
    filter.byAuthor
  );
  const [searchByPublishTimeLocal, setSearchByPublishTimeLocal] = useState(
    filter.byPublishTime
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setFilter({
        ...filter,
        byCategory: searchByCategoryLocal,
        byAuthor: searchByAuthorLocal,
        byPublishTime: searchByPublishTimeLocal,
      })
    );
    // eslint-disable-next-line
  }, [searchByCategoryLocal, searchByAuthorLocal, searchByPublishTimeLocal]);

  const handleChangeFilter = () => {
    const mainData = [...BLOG_DATA];
    const filterDataStep1 = [];
    const filterDataStep2 = [];

    if (filter.byCategory.length > 0) {
      mainData?.map((blogItem) => {
        blogItem.category.map((catItem) => {
          for (let i = 0; i < searchByCategoryLocal?.length; i++) {
            if (searchByCategoryLocal[i] === catItem) {
              filterDataStep1.push(blogItem);
            }
          }
        });
      });
      dispatch(setBlogList([...filterDataStep1]));
      if (filter.byAuthor.length > 0) {
        if (filter.byCategory.length > 0 && filterDataStep1?.length > 0) {
          filterDataStep1?.map((blogItem) => {
            searchByAuthorLocal.map((authorItem) => {
              if (blogItem.author === authorItem) {
                filterDataStep2.push(blogItem);
              }
              //return 0;
            });
            //return 0;
          });
          dispatch(setBlogList([...filterDataStep2]));
        }
      }
      // if(filter.byAuthor.length > 0){
      //   if(filter.byCategory.length > 0 && filterDataStep1?.length > 0){
      //     filterDataStep1?.map((blogItem) => {
      //       searchByAuthorLocal.map((authorItem) => {
      //         if (blogItem.author === authorItem) {
      //           filterDataStep2.push(blogItem);
      //         }
      //       //return 0;
      //       });
      //       //return 0;
      //     });
      //   } else if(filter.byCategory.length > 0 && filterDataStep1?.length === 0) {
      //     mainData?.map((blogItem) => {
      //       searchByAuthorLocal.map((authorItem) => {
      //         if (blogItem.author === authorItem) {
      //           filterDataStep1.push(blogItem);
      //         }
      //       //return 0;
      //       });
      //       //return 0;
      //     });
      //   }
      // }
    } else {
      if (filter.byAuthor.length > 0) {
        mainData?.map((blogItem) => {
          searchByAuthorLocal.map((authorItem) => {
            if (blogItem.author === authorItem) {
              filterDataStep1.push(blogItem);
            }
            //return 0;
          });
          //return 0;
        });
        dispatch(setBlogList([...filterDataStep1]));
      }
    }
  };

  useEffect(() => {
    handleChangeFilter();
    // eslint-disable-next-line
  }, []);
  const handleReset = () => {
    dispatch(reSetFilter());
    setSearchByCategoryLocal([]);
    setSearchByAuthorLocal([]);
    setSearchByPublishTimeLocal("");
  };
  return (
    <div className="px-2 flex flex-wrap items-center border-b-2">
      <div className="m-3">
        {/* <h3>Filter By Category</h3> */}
        <MultiCheckbox
          options={CATEGORY_NAMES}
          value={searchByCategoryLocal}
          handleChange={(values) => setSearchByCategoryLocal(values)}
          label="Filter By Category"
          containerClass="mt-5"
        />
      </div>
      <div className="m-3">
        {/* <h3>Filter By Author</h3> */}
        <MultiCheckbox
          options={AUTHOR_NAMES}
          value={searchByAuthorLocal}
          handleChange={(values) => setSearchByAuthorLocal(values)}
          label="Filter By Author"
          containerClass="mt-5"
        />
      </div>
      <div className="">
        <button className="p-3 ml-4 rounded-md bg-green-500 text-center" onClick={() => handleChangeFilter()}>
          FILTER
        </button>
      </div>
      <div className="md:ml-auto ml-4 mr-3">
        <button className="p-3 rounded-md bg-red-600 text-white text-center" onClick={() => handleReset()}>
          RESET FILTERS
        </button>
      </div>
    </div>
  );
};

export default FilterSection;

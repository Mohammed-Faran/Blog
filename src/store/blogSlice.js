import { createSlice } from "@reduxjs/toolkit";
import { BLOG_DATA } from "../utils";

const initialState = {
    blogList : [],
    filter: {
        byCategory: [],
        byAuthor: [],
        byPublishTime: "",
        bySearchText: "",
    }
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setFilter: (state, action) => {
        state.filter = action.payload
    },
    reSetFilter: (state, action) => {
        state.filter = initialState.filter
        state.blogList = BLOG_DATA;
    },
    setBlogList: (state, action) => {
      state.blogList = action.payload
  },
  resetBlogList: (state, action) => {
      state.blogList = initialState.blogList
  }
  }
});

export const {setFilter, reSetFilter, setBlogList, resetBlogList} = blogSlice.actions;
export default blogSlice.reducer;
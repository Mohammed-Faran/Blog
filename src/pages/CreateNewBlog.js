import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../component/Navbar";
import TextEditor from "../component/TextEditor";

const CreateNewBlog = () => {
  const [title, setTitle] = useState("");
  const [thubnailURL, setThubnamiURL] = useState("");
  const [blogContent, setBlogContent] = useState("");
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="md:w-[70%] mx-auto p-5 md:pt-5">
          <h2 className="md:text-5xl text-2xl">Create New Blog Post</h2>
          <div className="mt-5">
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              label="Title"
              required
              variant="outlined"
              className="w-[100%]"
            />
          </div>
          <div className="my-5">
            <TextField
              value={thubnailURL}
              onChange={(e) => setThubnamiURL(e.target.value)}
              id="thumnail"
              label="Thumnail Image URL"
              required
              variant="outlined"
              className="w-[100%]"
            />
          </div>
        </div>
        <div className="md:w-[70%] mx-auto p-5 md:pt-5">
          <TextEditor setBlogContent={setBlogContent} />
          <div className="mt-5">
            <Button variant="contained" disabled={!(title && thubnailURL)}>
              CREATE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewBlog;

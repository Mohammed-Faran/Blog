import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = ({setBlogContent}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // function uploadImageCallBack(file) {
  //   return new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open("POST", "https://api.imgur.com/3/image");
  //     //xhr.setRequestHeader("Authorization", "Client-ID ##clientid###");
  //     const data = new FormData();
  //     data.append("image", file);
  //     xhr.send(data);
  //     xhr.addEventListener("load", () => {
  //       const response = JSON.parse(xhr.responseText);
  //       console.log(response);
  //       resolve(response);
  //     });
  //     xhr.addEventListener("error", () => {
  //       const error = (xhr.responseText);
  //       console.log(error);
  //       reject(error);
  //     });
  //   });
  // }
  const onSetEditorState = (newState) => {
    setEditorState(newState);
    setBlogContent(newState);
 }
 const editorCustomStyle = {
  'border': "1px solid black",
  'min-height': "400px",
  'max-height': "400px",
  'overflow-y': 'auto',
  'cursor': 'text'
 }

  return (
    <div className="h-full w-full">
      <Editor
          editorState={editorState}
          onEditorStateChange={onSetEditorState}
          toolbar={{
            // image: {
            //   uploadCallback: uploadImageCallBack,
            //   alt: { present: true, mandatory: true },
            // },
          }}
          editorStyle={editorCustomStyle}
        />
    </div>
  );
};

export default TextEditor;

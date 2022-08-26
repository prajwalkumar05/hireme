import React, { useState } from "react";
import "./Example.css";

import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

export default function Exp() {
  const [text, setText] = React.useState("This is a controlled component");

  const [selectedImage, setSelectedImage] = useState(null);
  const [change, setChange] = useState(true);

  console.log(text);

  const handleChange = (e, setFn) => {
    setText(e.target.value);
  };

  return (
    <div>
      <EditText
        name="textbox"
        defaultValue={text}
        onChange={handleChange}
        showEditButton
      />

      <div class="file-input">
        <input
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
          type="file"
          name="file-input"
          id="file-input"
          class="file-input__input"
        />
        <label class="file-input__label" for="file-input">
          <span>Upload file</span>
        </label>
      </div>

      <div class="file-input" >
        <input
        style={{border:"1px solid green"}}
          type="file"
          name="file-input"
          id="file-input"
          class="file-input__input"
        />
        <label style={{padding:"15px ",borderRadius:"50%",border:"1px solid red"}} class="file-input__label" for="file-input">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="upload"
            class="svg-inline--fa fa-upload fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
}

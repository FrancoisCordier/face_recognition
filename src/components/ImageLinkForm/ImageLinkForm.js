import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {
          "This web application uses Machine Learning to detect faces in your pictures."
        }
      </p>
      <p className="f3">
        {
          "Just copy and paste an image URL from the web and press 'Detect'"
        }
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-3">
          <input className="w-70 f4 pa2" type="text" onChange={onInputChange} />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-blue bn"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

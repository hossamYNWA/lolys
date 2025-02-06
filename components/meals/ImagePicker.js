"use client";
import classes from "./imagePicker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ inputName, label }) {
  const imageRef = useRef(null);
  const [selectedImage, setImageURL] = useState(null);
  //make the button trigger input
  const triggerInput = () => {
    imageRef.current.click();
  };
  // make preview collect the image use chose
  const selectHandler = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImageURL(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageURL(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <div className={classes.preview}>
        <p>your selected image</p>
        {selectedImage && (
          <Image src={selectedImage} alt="image you selected" fill />
        )}
      </div>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <input
          required
          onChange={selectHandler}
          className={classes.input}
          type="file"
          id={inputName}
          ref={imageRef}
          name={inputName}
          accept="image/png, image/jpg, image/jpeg"
        ></input>
        <button className={classes.button} type="button" onClick={triggerInput}>
          Pick an image
        </button>
      </div>
    </div>
  );
}

"use client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import React, { useState, useRef } from "react";

const UploadPhotoGallery = ({ setImage, setPhotoLinks, photoLinks }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleUpload = async (files) => {
    const newImages = [...uploadedImages];
    let newPhotoLinks = photoLinks ? photoLinks : "";

    for (const file of files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result);
        setUploadedImages(newImages);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "crisgtk"); // Reemplaza con tu upload_preset

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/devy5khth/image/upload`, // Reemplaza con tu cloud_name
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();

        // Agregar el enlace de la imagen a newPhotoLinks
        newPhotoLinks = newPhotoLinks
          ? `${newPhotoLinks}, ${data.secure_url}`
          : data.secure_url;
        setPhotoLinks(newPhotoLinks);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleUpload(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleButtonClick = () => {
    // Programmatically trigger the hidden file input
    fileInputRef.current.click();
  };

  const handleDelete = (index) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  return (
    <>
      <div
        className="upload-img position-relative overflow-hidden bdrs12 text-center mb30 px-2"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="icon mb30">
          <span className="flaticon-upload" />
        </div>
        <h4 className="title fz17 mb10">Sube/Arrastra fotos de la propiedad</h4>
        <p className="text mb25">
          Las fotos deben estar en formato JPEG o PNG y tener al menos 2048x768
        </p>
        <label className="ud-btn btn-white">
          Explorar archivos
          <input
            ref={fileInputRef}
            id="fileInput"
            type="file"
            multiple
            className="ud-btn btn-white"
            onChange={(e) => handleUpload(e.target.files)}
            style={{ display: "none" }}
          />
        </label>
      </div>

      {/* Display uploaded images */}
      <div className="row profile-box position-relative d-md-flex align-items-end mb50">
        {uploadedImages.map((imageData, index) => (
          <div className="col-2" key={index}>
            <div className="profile-img mb20 position-relative">
              <img
                src={imageData}
                alt={`Uploaded Image ${index + 1}`}
                className="w-100 bdrs12 cover"
              />
              <button
                style={{ border: "none" }}
                className="tag-del"
                title="Delete Image"
                onClick={() => handleDelete(index)}
                type="button"
                data-tooltip-id={`delete-${index}`}
              >
                <span className="fas fa-trash-can" />
              </button>

              <ReactTooltip
                id={`delete-${index}`}
                place="right"
                content="Delete Image"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UploadPhotoGallery;
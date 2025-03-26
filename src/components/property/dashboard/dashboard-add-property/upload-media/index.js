"use client";

import React from "react";
import UploadPhotoGallery from "./UploadPhotoGallery";
import VideoOptionFiled from "./VideoOptionFiled";

const UploadMedia = ({image, setImage, photoLinks, setPhotoLinks, setYouTubeLink, setVirtualTourLink}) => {
  return (
    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Upload photos of your property</h4>
      <form className="form-style1">
        <div className="row">
          <div className="col-lg-12">
            <UploadPhotoGallery setImage={setImage} setPhotoLinks={setPhotoLinks} photoLinks={photoLinks} setVirtualTourLink={setVirtualTourLink}/>
          </div>
        </div>
        {/* End col-12 */}

        <div className="row">
          <h4 className="title fz17 mb30">Opciones de video</h4>
          <VideoOptionFiled  setYouTubeLink={setYouTubeLink}/>
        </div>
        {/* End .row */}

        <div className="row">
          <h4 className="title fz17 mb30">Virtual Tour</h4>
          <div className="col-sm-6 col-xl-12">
            <div className="mb30">
              <label className="heading-color ff-heading fw600 mb10">
                Tur Virtual
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="enlace tur virtual"
                onChange={(e) => setVirtualTourLink(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* End .row */}
      </form>
    </div>
  );
};

export default UploadMedia;

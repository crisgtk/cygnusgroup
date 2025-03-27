"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const PropertyVideo = ({ id, listings }) => {
  const [isOpen, setOpen] = useState(false);

  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  if (!data) {
    return <div>Loading...</div>;
  }

  // Extraer el ID de YouTube de la URL
  const youtubeId = data.youtubeLink.match(/(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=))([a-zA-Z0-9_-]{11})/);

  const videoId = youtubeId ? youtubeId[1] : null;

  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />

      <div className="col-md-12">
        <div className="property_video bdrs12 w-100">
          <button
            className="video_popup_btn mx-auto popup-img"
            onClick={() => setOpen(true)}
            style={{ border: "none", background: "transparent" }}
          >
            <span className="flaticon-play" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertyVideo;
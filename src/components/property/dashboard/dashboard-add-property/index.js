"use client"

import React, { useState } from "react";
import PropertyDescription from "./property-description";
import UploadMedia from "./upload-media";
import LocationField from "./LocationField";
import DetailsFiled from "./details-field";
import Amenities from "./Amenities";
import { insertProperty } from "@/server/properties";

const AddPropertyTabContent = () => {
  const [title, setTitle] = useState("");
  const [descriptionDetail, setDescriptionDetail] = useState("");
  const [descriptionDetail2, setDescriptionDetail2] = useState("");
  const [category, setCategory] = useState(0);
  const [forRent, setForRent] = useState(false);
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [youTubeLink, setYouTubeLink] = useState("");
  const [virtualTourLink, setVirtualTourLink] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [comuna, setComuna] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [rooms, setRooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [yearBuilt, setYearBuilt] = useState(0);
  const [features, setFeatures] = useState(true);
  const [photoLinks, setPhotoLinks] = useState("");
  const [tags, setTags] = useState("");
  const [sqft, setSqft] = useState(0);
  const [executiveId, setExecutiveId] = useState(0);

  const handleSubmit = async () => {
    const propertyData = {
      Title: title,
      DescriptionDetail: descriptionDetail,
      DescriptionDetail2: descriptionDetail2,
      Category: category,
      ForRent: forRent,
      Status: status,
      Price: price,
      Image: image,
      YouTubeLink: youTubeLink,
      VirtualTourLink: virtualTourLink,
      Address: address,
      Country: country,
      City: city,
      Comuna: comuna,
      ShortDescription: shortDescription,
      Latitude: latitude,
      Longitude: longitude,
      Rooms: rooms,
      Bedrooms: bedrooms,
      Bathrooms: bathrooms,
      YearBuilt: yearBuilt,
      Features: features,
      PhotoLinks: photoLinks,
      Tags: tags,
      Sqft: sqft,
      ExecutiveId: executiveId
    };

    console.log('Property data:::', propertyData);

    try {
      const result = await insertProperty(propertyData);
      console.log('Property inserted successfully:', result);
    } catch (error) {
      console.error('Error inserting property:', error);
    }
  };

  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab2" role="tablist">
          <button
            className="nav-link active fw600 ms-3"
            id="nav-item1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item1"
            type="button"
            role="tab"
            aria-controls="nav-item1"
            aria-selected="true">
            1. Descripción
          </button>
          <button
            className="nav-link fw600"
            id="nav-item2-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item2"
            type="button"
            role="tab"
            aria-controls="nav-item2"
            aria-selected="false">
            2. Media
          </button>
          <button
            className="nav-link fw600"
            id="nav-item3-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item3"
            type="button"
            role="tab"
            aria-controls="nav-item3"
            aria-selected="false">
            3. Localización
          </button>
          <button
            className="nav-link fw600"
            id="nav-item4-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item4"
            type="button"
            role="tab"
            aria-controls="nav-item4"
            aria-selected="false">
            4. Detalles
          </button>
          <button
            className="nav-link fw600"
            id="nav-item5-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item5"
            type="button"
            role="tab"
            aria-controls="nav-item5"
            aria-selected="false">
            5. Comodidades
          </button>
        </div>
      </nav>
      {/* End nav tabs */}

      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-item1"
          role="tabpanel"
          aria-labelledby="nav-item1-tab">
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Descripción Propiedad</h4>
            <PropertyDescription
              title={title}
              setTitle={setTitle}
              descriptionDetail={descriptionDetail}
              setDescriptionDetail={setDescriptionDetail}
              category={category}
              setCategory={setCategory}
              forRent={forRent}
              setForRent={setForRent}
              status={status}
              setStatus={setStatus}
              price={price}
              setPrice={setPrice}
              setShortDescription={setShortDescription}
            />
          </div>
        </div>
        {/* End tab for Property Description */}

        <div
          className="tab-pane fade"
          id="nav-item2"
          role="tabpanel"
          aria-labelledby="nav-item2-tab">
          <UploadMedia
            image={image}
            setImage={setImage}
            photoLinks={photoLinks}
            setPhotoLinks={setPhotoLinks}
            setYouTubeLink={setYouTubeLink}
            setVirtualTourLink={setVirtualTourLink}
          />
        </div>
        {/* End tab for Upload photos of your property */}

        <div
          className="tab-pane fade"
          id="nav-item3"
          role="tabpanel"
          aria-labelledby="nav-item3-tab">
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Ubicación propiedad</h4>
            <LocationField
              address={address}
              setAddress={setAddress}
              country={country}
              setCountry={setCountry}
              city={city}
              setCity={setCity}
              comuna={comuna}
              setComuna={setComuna}
              latitude={latitude}
              setLatitude={setLatitude}
              longitude={longitude}
              setLongitude={setLongitude}
            />
          </div>
        </div>
        {/* End tab for Listing Location */}

        <div
          className="tab-pane fade"
          id="nav-item4"
          role="tabpanel"
          aria-labelledby="nav-item4-tab">
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Detalles del listado</h4>
            <DetailsFiled
              rooms={rooms}
              setRooms={setRooms}
              bedrooms={bedrooms}
              setBedrooms={setBedrooms}
              bathrooms={bathrooms}
              setBathrooms={setBathrooms}
              yearBuilt={yearBuilt}
              setYearBuilt={setYearBuilt}
              sqft={sqft}
              setSqft={setSqft}
              executiveId={executiveId}
              setExecutiveId={setExecutiveId}
            />
          </div>
        </div>
        {/* End tab for Listing Details */}

        <div
          className="tab-pane fade"
          id="nav-item5"
          role="tabpanel"
          aria-labelledby="nav-item5-tab">
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Seleccionar servicios</h4>
            <div className="row">
              <Amenities
                features={features}
                setFeatures={setFeatures}
                tags={tags}
                setTags={setTags}
              />
            </div>
          </div>
        </div>
        {/* End tab for Select Amenities */}
      </div>
      <button onClick={handleSubmit} className="btn btn-primary mt-3">
        Insertar Propiedad
      </button>
    </>
  );
};

export default AddPropertyTabContent;

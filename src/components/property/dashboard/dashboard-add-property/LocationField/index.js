import React from "react";
import SelectMulitField from "./SelectMulitField";
import Map from "./Map";

const LocationField = ({setAddress, setComuna, setCity, setCountry, setLatitude, setLongitude}) => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Dirección"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        {/* End col-12 */}

        <SelectMulitField  setCity={setCity} setCountry={setCountry}/>

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Código postal
            </label>
            <input type="text" className="form-control" />
          </div>
        </div> */}
        {/* End col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Localidad</label>
            <input
              type="text"
              className="form-control"
              placeholder="Otra descripción"
              onChange={(e) => setComuna(e.target.value)}
            />
          </div>
        </div>
        {/* End col-4 */}

        {/* <div className="col-sm-12">
          <div className="mb20 mt30">
            <label className="heading-color ff-heading fw600 mb30">
              Ingrese latitude y longitude
            </label>
            <Map />
          </div>
        </div> */}
        {/* End col-12 */}
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Latitude
            </label>
            <input type="text" className="form-control" onChange={(e) => setLatitude(e.target.value)}  />
          </div>
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Longitude
            </label>
            <input type="text" className="form-control" onChange={(e) => setLongitude(e.target.value)}  />
          </div>
        </div>
      </div>
      {/* End .row */}
    </form>
  );
};

export default LocationField;

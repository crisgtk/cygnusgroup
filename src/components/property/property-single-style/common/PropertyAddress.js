import React from "react";

const PropertyAddress = ({ id, listings }) => {



  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  if (!data) {
    return <div>Loading...</div>;
  }


  const addresses = [
    {
      address: data.address,
      city: data.city,
      state: data.location,
      // zipCode: "90034",
      // area: "Brookside",
      // country: "United States",
    },
  ];

  return (
    <>
      {addresses.map((address, index) => (
        <div
          key={index}
          className={`col-md-6 col-xl-6 ${index === 1 ? "offset-xl-2" : ""}`}>
          <div className="d-flex justify-content-between">
            <div className="pd-list">
              <p className="fw600 mb10 ff-heading dark-color">Dirección:</p>
              <p className="fw600 mb10 ff-heading dark-color">Ciudad:</p>
              <p className="fw600 mb-0 ff-heading dark-color">Comuna:</p>
            </div>
            <div className="pd-list">
              <p className="text mb10">{address.address}</p>
              <p className="text mb10">{address.city}</p>
              <p className="text mb-0">{address.state}</p>
            </div>
          </div>
        </div>
      ))}
      {/* End col */}

      <div className="col-md-12">
        <iframe
          className="position-relative bdrs12 mt30 h250"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${addresses[0].address}&t=m&z=14&output=embed&iwloc=near`}
          title={addresses[0].address}
          aria-label={addresses[0].address}
        />
      </div>
      {/* End col */}
    </>
  );
};

export default PropertyAddress;

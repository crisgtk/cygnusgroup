import React from "react";

const PropertyFeaturesAminites = ({ id, listings }) => {

  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  if (!data) {
    return <div>Loading...</div>;
  }

  const featuresAmenitiesData = [
    data.tags
  ];

  return (
    <>
      {featuresAmenitiesData.map((row, rowIndex) => (
        <div key={rowIndex} className="col-sm-6 col-md-4">
          <div className="pd-list">
            {row.map((item, index) => (
              <p key={index} className="text mb10">
                <i className="fas fa-circle fz6 align-middle pe-2" />
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyFeaturesAminites;

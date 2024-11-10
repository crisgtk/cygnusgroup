import React from "react";

const PropertyFeaturesAminites = () => {
  const featuresAmenitiesData = [
    ["Aire Acondicionado", "Parrilla", "Secadora", "Gimnasio"],
    ["Jardín", "Microondas", "Ducha Exterior", "Refrigerador"],
    ["Piscina", "Cable TV", "Lavadora", "WiFi"],
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

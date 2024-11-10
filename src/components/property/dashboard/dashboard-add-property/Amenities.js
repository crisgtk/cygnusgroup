import React from "react";

const amenitiesData = {
  column1: [
    { label: "Ático", defaultChecked: false },
    { label: "Cancha de baloncesto", defaultChecked: true },
    { label: "Aire acondicionado", defaultChecked: true },
    { label: "Césped", defaultChecked: true },
    { label: "Piscina", defaultChecked: false },
    { label: "Parrilla", defaultChecked: false },
    { label: "Microondas", defaultChecked: false },
  ],
  column2: [
    { label: "Cable TV", defaultChecked: false },
    { label: "Secadora", defaultChecked: true },
    { label: "Ducha exterior", defaultChecked: true },
    { label: "Lavadora", defaultChecked: true },
    { label: "Gimnasio", defaultChecked: false },
    { label: "Vista al océano", defaultChecked: false },
    { label: "Espacio privado", defaultChecked: false },
  ],
  column3: [
    { label: "Vista al lago", defaultChecked: false },
    { label: "Bodega", defaultChecked: true },
    { label: "Jardín delantero", defaultChecked: true },
    { label: "Refrigerador", defaultChecked: true },
    { label: "WiFi", defaultChecked: false },
    { label: "Lavandería", defaultChecked: false },
    { label: "Sauna", defaultChecked: false },
  ],
};

const Amenities = () => {
  return (
    <div className="row">
      {Object.keys(amenitiesData).map((columnKey, index) => (
        <div key={index} className="col-sm-6 col-lg-3 col-xxl-2">
          <div className="checkbox-style1">
            {amenitiesData[columnKey].map((amenity, amenityIndex) => (
              <label key={amenityIndex} className="custom_checkbox">
                {amenity.label}
                <input
                  type="checkbox"
                  defaultChecked={amenity.defaultChecked}
                />
                <span className="checkmark" />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Amenities;

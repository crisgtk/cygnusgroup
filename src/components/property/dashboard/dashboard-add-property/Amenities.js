import React from "react";

const amenitiesData = {
  column1: [
    { label: "Ático", defaultChecked: false },
    { label: "Cancha de baloncesto", defaultChecked: false },
    { label: "Aire acondicionado", defaultChecked: false },
    { label: "Césped", defaultChecked: false },
    { label: "Piscina", defaultChecked: false },
    { label: "Parrilla", defaultChecked: false },
    { label: "Microondas", defaultChecked: false },
  ],
  column2: [
    { label: "Cable TV", defaultChecked: false },
    { label: "Secadora", defaultChecked: false },
    { label: "Ducha exterior", defaultChecked: false },
    { label: "Lavadora", defaultChecked: false },
    { label: "Gimnasio", defaultChecked: false },
    { label: "Vista al océano", defaultChecked: false },
    { label: "Espacio privado", defaultChecked: false },
  ],
  column3: [
    { label: "Vista al lago", defaultChecked: false },
    { label: "Bodega", defaultChecked: false },
    { label: "Jardín delantero", defaultChecked: false },
    { label: "Refrigerador", defaultChecked: false },
    { label: "WiFi", defaultChecked: false },
    { label: "Lavandería", defaultChecked: false },
    { label: "Sauna", defaultChecked: false },
  ],
};

const Amenities = ({setTags}) => {
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
                  onChange={(e) => {
                    if (e.target.checked) {
                      setTags((prev) => [...prev, amenity.label]);
                    } else {
                      setTags((prev) => prev.filter((tag) => tag !== amenity.label));
                    }
                  }}
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

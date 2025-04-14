"use client";

import React from "react";
import Select from "react-select";

const options = {
  countries: ["Chile"],
  cities: ["Arica", "Iquique", "Antofagasta", "Copiapó", "La Serena", "Valparaíso", "Santiago", "Puente Alto", "Maipú", "Viña del Mar", "Rancagua", "Temuco", "Concepción", "Talca", "Chillán", "Osorno", "Punta Arenas", "Calama", "Talcahuano", "Quillota", "Los Andes", "Linares", "San Fernando", "Ovalle", "San Bernardo", "Los Ángeles", "Curicó", "Puerto Montt", "Coquimbo", "Linares", "Pudahuel", "La Calera", "Villa Alemana", "La Ligua", "Melipilla", "Ñuñoa", "Las Condes", "La Florida", "Quilpué", "Concón", "El Bosque", "Macul", "San Miguel", "Recoleta", "Lo Prado", "Cerro Navia", "Lo Barnechea", "La Reina", "Providencia", "Vitacura", "Estación Central", "Pedro Aguirre Cerda", "La Cisterna", "San Joaquín"],
  additionalCountries: ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Metropolitana de Santiago", "O'Higgins", "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén del General Carlos Ibáñez del Campo", "Magallanes y de la Antártica Chilena"],
};

const customStyles = {
  option: (styles, { isFocused, isSelected, isHovered}) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "#eb6753"
        : isHovered
        ? "#eb675312"
        : isFocused
        ? "#eb675312"
        : undefined,
    };
  },
};

const SelectMultiField = ({ setCity, setCountry, Controller, control, errors  }) => {
  const fieldTitles = ["Pais", "Ciudad", "Región"];
  return (
    <>
      {Object.keys(options).map((key, index) => (
        <div className="col-sm-6 col-xl-4" key={index}>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              {fieldTitles[index]}
            </label>
            <div className="location-area">
              <Controller
                name={key} // Use the key as the field name
                control={control}
                rules={{ required: `El campo ${fieldTitles[index]} es obligatorio` }}
                render={({ field }) => (
                  <Select
                    {...field}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    options={options[key].map((item) => ({
                      value: item,
                      label: item,
                    }))}
                    placeholder={`Seleccione ${fieldTitles[index]}`}
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption);
                      if (fieldTitles[index] === "Ciudad") {
                        setCity(selectedOption);
                      }
                      if (fieldTitles[index] === "Pais") {
                        setCountry(selectedOption);
                      }
                    }}
                  />                  
                )}
              />
             {errors[key] && (
              <span className="text-danger">{errors[key].message}</span>
            )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SelectMultiField;
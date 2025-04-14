"use client";
import Select from "react-select";

const LookingFor = ({setInqueryType}) => {
  const inqueryType = [
    { value: "Departamento", label: "Departamento" },
    { value: "Casas", label: "Casas" },
    { value: "Oficinas", label: "Oficinas" },
    { value: "Parcelas", label: "Parcelas" },
    { value: "Terrenos", label: "Terrenos" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "none",
    }),
    option: (styles, { isFocused, isSelected, isHovered }) => {
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
  return (
    <>
      <Select
        name="colors"
        options={inqueryType}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        placeholder="Seleccione..."
        required
        isClearable={false}
        onChange={setInqueryType}
      />
    </>
  );
};

export default LookingFor;

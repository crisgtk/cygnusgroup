"use client";
import Select from "react-select";

const LookingFor = () => {
  const inqueryType = [
    { value: "Apartments", label: "Departamento" },
    { value: "Houses", label: "Casas" },
    { value: "Office", label: "Oficinas" },
    { value: "TownHome", label: "Parcelas" },
    { value: "Villa", label: "Terrenos" },
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
        defaultValue={[inqueryType[0]]}
        name="colors"
        options={inqueryType}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isClearable={false}
      />
    </>
  );
};

export default LookingFor;

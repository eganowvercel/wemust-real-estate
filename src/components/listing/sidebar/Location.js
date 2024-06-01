"use client";
import Select from "react-select";

const Location = ({ filterFunctions }) => {
  const locationOptions = [{ value: "All Cities", label: "All Cities" }];

  const customStyles = {
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
      s;
    },
  };

  return (
    <Select
      defaultValue={[locationOptions[0]]}
      name="colors"
      styles={customStyles}
      options={locationOptions}
      value={{
        value: filterFunctions.location,
        label: filterFunctions.location,
      }}
      className="select-custom filterSelect"
      classNamePrefix="select"
      onChange={(e) => filterFunctions?.handlelocation(e.value)}
      required
    />
  );
};

export default Location;

import React from "react";
import "./Dropdown.scss";

const Dropdown = (props) => {
  const { handleDropdown } = props;

  return (
    <>
      <label className="dropdown__label" htmlFor="roles">
        Select roles:
      </label>
      <select id="roles" className="dropdown" onChange={handleDropdown}>
        <option className="dropdown__option" value=""></option>
        <option className="dropdown__option" value="Junior Software Developer">
          Junior Software Developer
        </option>
        <option className="dropdown__option" value="Software Developer">
          Software Developer
        </option>
        <option className="dropdown__option" value="Senior Developer">
          Senior Developer
        </option>
        <option className="dropdown__option" value="Tester">
          Tester
        </option>
        <option className="dropdown__option" value="Project Manager">
          Project Manager
        </option>
        <option className="dropdown__option" value="Hard Man">
          Hard Man
        </option>
      </select>
    </>
  );
};

export default Dropdown;

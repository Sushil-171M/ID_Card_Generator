import React, { useState, createContext } from "react";
import FormComponent from "./FormComponent";
import ShowIDCard from "./ShowIDCard";

const GeneratorIDCard = () => {
  const [formData, setFormData] = useState({
    name: "Enter ur name",
    clgName: "Enter College Name",
    location: "Enter Location",
  });

  const handleFormData = (formdata) => {
    console.log(formdata);
    setFormData({ ...formdata });
    console.log("formData", formData);
  };

  return (
    <div className="row">
      <div
        className="column"
        style={{
          backgroundColor: "darkgrey",
          float: "left",
          width: "50%",
          height: "20rem",
        }}
      >
        <FormComponent handleFormData={handleFormData} />
      </div>
      <div className="column" style={{ height: "20rem" }}>
        <ShowIDCard value={formData} />
      </div>
    </div>
  );
};

export default GeneratorIDCard;

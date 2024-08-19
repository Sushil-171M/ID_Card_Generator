import React, { useState } from "react";

const FormComponent = (props) => {
  const [clgname, setClgName] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handler = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      clgName: clgname,
      location: location,
    };

    props.handleFormData(formData);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const clgNameHandler = (e) => {
    setClgName(e.target.value);
  };

  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  return (
    <form style={{ marginTop: "20px" }}>
      <div style={{ margin: "20px" }}>
        <label htmlFor="name"> Enter Name : </label>
        <input required id="name" type="text" onChange={nameHandler} />
      </div>

      <div style={{ margin: "20px" }}>
        <label required htmlFor="clgname">
          College Name :{" "}
        </label>
        <input id="clgname" type="text" onChange={clgNameHandler} />
      </div>

      <div style={{ margin: "20px" }}>
        <label htmlFor="location"> Location : </label>
        <input required id="location" type="text" onChange={locationHandler} />
      </div>

      <div>
        <button type="submit" onClick={handler}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </form>
  );
};

export default FormComponent;

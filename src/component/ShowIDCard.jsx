import React, { useContext } from "react";
import dataContext from "./GeneratorIDCard";

const ShowIDCard = (props) => {
  console.log(props.value);
  return (
    <div style={{ padding: "0px" }}>
      <h2> Generated Card</h2>

      <div style={{ margin: "0px", backgroundColor: "red" }}>
        <div className="row">
          <div
            className="column"
            style={{
              float: "left",
              width: "20%",
              height: "15rem",
              backgroundColor: "coral",
              marginLeft: "5px",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginTop: "5rem" }}> Photo</h2>
          </div>
          <div
            className="column"
            style={{
              marginBottom: "10px",
              float: "right",
              width: "28%",
              height: "15rem",
              backgroundColor: "white",
            }}
          >
            <div style={{ marginTop: "4rem" }}>
              <h4>
                {" "}
                Name : <strong> {props.value.name} </strong>{" "}
              </h4>
              <h4> College Name : {props.value.clgName} </h4>
              <h4> Location : {props.value.location} </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowIDCard;

import React from "react";
import Typical from "react-typical";
import Services from "../Services";
import Popular from "../Popular";
import "./index.css";

const Landingpage = () => {
  return (
    <>
      <h1 className="motto">
        <Typical
          loop={Infinity}
          steps={["Enhance your home", 2000, "Enhance your life", 2000]}
        />
      </h1>
      <Services/>
      <Popular/>
    </>
  );
};
export default Landingpage;

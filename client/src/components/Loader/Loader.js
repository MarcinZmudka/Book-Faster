import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader_box">
      <div className="loader_square"></div>
      <div className="loader_text">Trwa ładowanie</div>
    </div>
  );
};

export default Loader;

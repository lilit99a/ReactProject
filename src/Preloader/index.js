import React from "react";
import style from "../Preloader/style.module.css"
import preloader from "../images/load1.gif";


const Preloader = (props) => {
  return <img class={style.preloader} src={preloader} />;
};

export default Preloader;

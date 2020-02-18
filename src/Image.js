import React from "react";
import { MyContext } from "./App";

const Image = props => {
  const { count } = React.useContext(MyContext);
  console.log(count);
  return <img src={props.src} alt={props.alt} />;
};

export default Image;

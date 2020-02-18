import React from "react";

const InputText = ({ productPage, InputProduct }) => {
  return (
    <input
      type="text"
      onChange={event => {
        productPage.setState({ inputProduct: event.target.value });
      }}
    />
  );
};

export default InputText;

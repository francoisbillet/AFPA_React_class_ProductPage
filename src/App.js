import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./ProductPage";
// import InputText from "./InputText";

const AComponent = props => {
  return <b>{props.children}</b>;
};

const MyContext = React.createContext();

function App() {
  // const [setInputProduct, product] = useProducts();
  return (
    <MyContext.Provider value={{ count: 0 }}>
      <ProductPage />
      <AComponent>texte en gras</AComponent>
      {/* ou <AComponent children="coucou" /> */}
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };

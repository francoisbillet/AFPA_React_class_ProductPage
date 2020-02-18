import React from "react";
import Image from "./Image";
import Infos from "./Infos";
import InputText from "./InputText";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      inputProduct: ""
    };
  }

  componentDidMount() {
    fetch("https://server-ten.now.sh")
      .then(body => body.json())
      .then(response => {
        this.setState({ products: response });
        console.log(response);
      });
  }

  render() {
    const product = this.state.products.find(product => {
      return product.id === this.state.inputProduct;
    });
    if (!product) {
      return (
        <React.Fragment>
          <InputText
            productPage={this}
            setInputProduct={this.state.inputProduct}
          />
          <p>Enter product ID</p>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <InputText productPage={this} InputProduct={this.state.inputProduct} />
        <main className="product">
          <div className="left-column">
            <Image
              src={product.img} // pas les {} parce que string uniquement
              alt={product.title}
            />
          </div>

          <div className="right-column">
            <Infos product={product} />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default ProductPage;

import React, { Component } from "react";
import "./mainPageStyle.css";
import Product from "./prodItem";
import StatsPage from "./statsPage";
import InputForm from "./inputForm";
import { getData } from "./bikeData";

class MainPage extends Component {
  state = {
    products: getData(),
  };

  handleSubmit = () => {
    this.setState({ products: getData() });
  };

  getState = () => {
    return this.state.products;
  };

  render() {
    return (
      <div className="main">
        <div className="header">
          <h2 className="label">ADMIN.BIKE-BOOKING.COM</h2>
        </div>
        <div className="container-home">
          <div className="product column ">
            <Product submit={this.handleSubmit} items={this.state.products} />
          </div>
          <div className="information column">
            <InputForm submit={this.handleSubmit} />
            <StatsPage products={this.state.products} />
          </div>
        </div>
        <div className="footer">
          <span className="developer">Developer :</span>
          <span className="author">Anton Gaidashevskyi</span>
        </div>
      </div>
    );
  }
}

export default MainPage;

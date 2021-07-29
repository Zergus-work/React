import React, { Component } from "react";

class StatsPage extends Component {
  getStatus = (z) =>
    this.props.products.reduce((prods, index) => {
      if (index.status === z) return ++prods;
      return prods;
    }, 0);

  averageCost = (x) => {
    return Math.floor(x.reduce((x, y) => (x += y.price), 0) / x.length);
  };

  render() {
    const { products } = this.props;
    return (
      <div className="statistic">
        <h2 className="stats">STATISTICS</h2>
        <span>
          Total bikes:{" "}
          <span id="numInfo">
            <b>{products.length}</b>
          </span>
        </span>
        <span>
          Avaible Bikes:{" "}
          <span id="numInfo">
            <b>{this.getStatus("Avaliable")}</b>{" "}
          </span>
        </span>
        <span>
          Booked Bikes:{" "}
          <span id="numInfo">
            <b>{this.getStatus("Booked")}</b>{" "}
          </span>
        </span>
        <span>
          Average bike cost:{" "}
          <span id="numInfo">
            {" "}
            <b>{this.averageCost(products).toFixed(2)}</b> UAH/hr.
          </span>
        </span>
      </div>
    );
  }
}

export default StatsPage;

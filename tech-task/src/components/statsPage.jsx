import React, { Component } from "react";

class StatsPage extends Component {
  getStatus = (z) =>
    this.props.products.reduce((prods, index) => {
      if (index.status === z) return ++prods;
      return prods;
    }, 0);

  averageCost = (x) => {
    return Math.floor(x.reduce((x, y) => (x += Number(y.price)), 0) / x.length);
  };

  render() {
    const { products } = this.props;
    return (
      <div className="statistic">
        <h2 className="stats">STATISTICS</h2>
        <div className="statsRow">
          Total bikes:{" "}
          <span id="numInfo">
            <b>{products.length}</b>
          </span>
        </div>
        <div className="statsRow">
          Avaliable Bikes:{" "}
          <span id="numInfo">
            <b>{this.getStatus("Avaliable")}</b>{" "}
          </span>
        </div>
        <div className="statsRow">
          Booked Bikes:{" "}
          <span id="numInfo">
            <b>{this.getStatus("Busy")}</b>{" "}
          </span>
        </div>
        <div className="statsRow">
          Average bike cost:{" "}
          <span id="numInfo">
            {" "}
            <b>{this.averageCost(products).toFixed(2)}</b> UAH/hr.
          </span>
        </div>
      </div>
    );
  }
}

export default StatsPage;

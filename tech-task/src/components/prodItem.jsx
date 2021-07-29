import React, { Component } from "react";
import { deleteItem } from "./bikeData";

class Product extends Component {
  setColor = () => {};

  delete = (e) => {
    deleteItem(e);
  };
  render() {
    const items = this.props.items;
    return items.map((x) => (
      <div key={x._id} className="prod-item">
        <div className="prod-cont">
          <div className="name">
            {x.name} -{" "}
            <span id="type">
              {x.type} ({x.color})
            </span>
          </div>
          <div className="id">ID: {x._id}</div>
          <div className="status">
            {`STATUS: `}
            <span id="avaible">{x.status}</span>
          </div>
        </div>

        <div className="del">
          <div className="div delBtn">
            <div id={x._id} onClick={this.delete} className="delete"></div>
          </div>
          <div className="price">{x.price.toFixed(2)} UAH/hr.</div>
        </div>
      </div>
    ));
  }
}

export default Product;

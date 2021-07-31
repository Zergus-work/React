import React, { Component } from "react";
import { deleteItem, changeStatus } from "./bikeData";

class Product extends Component {
  delete = (e) => {
    deleteItem(e);
    this.props.submit();
  };

  setClass = (y) => {
    switch (y.status) {
      case "Avaliable":
        return "prod-item Avaliable";
      case "Busy":
        return "prod-item Busy";
      case "Unavaliable":
        return "prod-item Unavaliable";
      default:
        return;
    }
  };

  status = (e) => {
    let choosenStatus = "";

    switch (e.target.options.selectedIndex) {
      case 0:
        choosenStatus = "Avaliable";
        break;
      case 1:
        choosenStatus = "Busy";
        break;
      case 2:
        choosenStatus = "Unavaliable";
        break;
      default:
        choosenStatus = "Unavaliable";
    }

    changeStatus(e.target.id, choosenStatus);
    this.props.submit();
  };

  render() {
    const { items } = this.props;
    return items.map((x) => (
      <div key={x._id} className={this.setClass(x)}>
        <div className="prod-cont">
          <div className="name">
            {x.name} -{" "}
            <span id="type" style={{ fontWeight: "lighter" }}>
              {x.type} ({x.color})
            </span>
          </div>
          <div className="id">ID: {x._id}</div>

          <div className="container-status">
            STATUS:
            <select
              onChange={this.status}
              className="status"
              id={x._id}
              defaultValue={x.status}
            >
              <option value="Avaliable">Avaliable</option>
              <option value="Busy">Busy</option>
              <option value="Unavaliable">Unavaliable</option>
            </select>
          </div>
        </div>

        <div className="del">
          <div className="div delBtn">
            <div
              id={x._id}
              onClick={(e) => this.delete(e)}
              className="delete"
            ></div>
          </div>
          <div className="price">{Number(x.price).toFixed(2)} UAH/hr.</div>
        </div>
      </div>
    ));
  }
}

export default Product;

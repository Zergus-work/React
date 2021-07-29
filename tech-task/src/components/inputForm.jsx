import React, { Component } from "react";
import { addData } from "./bikeData";
import Input from "./input";

class InputForm extends Component {
  state = {
    newBike: {
      name: "",
      status: "",
      type: "",
      color: "",
      price: "",
      wheelSize: "",
      _id: "",
      description: "",
    },
  };

  handleClear = () => {
    this.setState({
      newBike: {
        name: "",
        status: "Avalibale",
        type: "",
        color: "",
        price: "",
        wheelSize: "",
        _id: "",
        description: "",
      },
    });
  };

  handleChange = (e) => {
    const newBike = { ...this.state.newBike };
    newBike[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ newBike });
  };
  addItem = (data) => {
    addData(data);
    this.handleClear();
  };
  render() {
    const { newBike } = this.state;
    return (
      <div className="container-input">
        <Input
          name="name"
          value={newBike}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <Input
          name="type"
          onChange={this.handleChange}
          value={newBike}
          placeholder="Type"
        />
        <Input
          onChange={this.handleChange}
          value={newBike}
          name="color"
          placeholder="Color"
        />
        <Input
          onChange={this.handleChange}
          value={newBike}
          name="wheelSize"
          placeholder="Wheel size"
        />
        <Input
          onChange={this.handleChange}
          value={newBike}
          name="price"
          placeholder="Price"
        />
        <Input
          onChange={this.handleChange}
          value={newBike}
          name="_id"
          placeholder="ID(slug):XXXXXXXXXXXXX"
        />
        <textarea
          onChange={this.handleChange}
          value={newBike.description}
          name="description"
          id="descr"
          type="text"
          placeholder="Descriprion"
        />

        <button onClick={() => this.addItem(newBike)} id="save">
          SAVE
        </button>
        <button onClick={this.handleClear} id="clear">
          CLEAR
        </button>
      </div>
    );
  }
}

export default InputForm;

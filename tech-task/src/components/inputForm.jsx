import React, { Component } from "react";
import { addData } from "./bikeData";
import Input from "./input";
import Joi from "joi-browser";

class InputForm extends Component {
  state = {
    newBike: {
      name: "",
      type: "",
      color: "",
      price: "",
      wheelSize: "",
      _id: "",
      description: "",
    },
    errors: {},
  };

  handleClear = (e) => {
    this.setState({
      newBike: {
        name: "",
        type: "",
        color: "",
        price: "",
        wheelSize: "",
        _id: "",
        description: "",
      },
    });
  };

  schema = {
    name: Joi.string().alphanum().min(5).required().label("Name"),
    type: Joi.string().alphanum().min(5).required().label("Type"),
    color: Joi.string().alphanum().min(5).required().label("Color"),
    price: Joi.number().positive().less(999999).required().label("Price"),
    wheelSize: Joi.number().positive().required().label("Size of wheel"),
    _id: Joi.number().positive().min(10).required().label("ID"),
    description: Joi.string().min(5).max(200).required().label("Description"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.newBike, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e, data) => {
    e.preventDefault();
    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    addData(data);
    this.handleClear();
    this.props.submit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const newBike = { ...this.state.newBike };
    newBike[input.name] = input.value;
    this.setState({ newBike, errors });
  };

  render() {
    const { newBike, errors } = this.state;
    return (
      <form className="container-input" onSubmit={this.handleSubmit}>
        <div className="columns">
          <div className="col1">
            <Input
              name="name"
              value={newBike}
              onChange={this.handleChange}
              placeholder="Name"
              error={errors.name}
            />
            <Input
              onChange={this.handleChange}
              value={newBike}
              name="color"
              placeholder="Color"
              error={errors.color}
            />
            <Input
              onChange={this.handleChange}
              value={newBike}
              name="price"
              placeholder="Price"
              error={errors.price}
            />
          </div>
          <div className="col2">
            <Input
              name="type"
              onChange={this.handleChange}
              value={newBike}
              placeholder="Type"
              error={errors.type}
            />

            <Input
              onChange={this.handleChange}
              value={newBike}
              name="wheelSize"
              placeholder="Wheel size"
              error={errors.wheelSize}
            />

            <Input
              onChange={this.handleChange}
              value={newBike}
              name="_id"
              placeholder="Enter unique ID"
              error={errors._id}
            />
          </div>
        </div>
        <div className="Line4">
          <Input
            onChange={this.handleChange}
            value={newBike}
            name="description"
            type="text"
            placeholder="Descriprion"
            error={errors.description}
          />
        </div>
        <div className="line5">
          <button
            disabled={this.validate()}
            onClick={(e) => this.handleSubmit(e, newBike)}
            id="save"
          >
            SAVE
          </button>
          <button onClick={this.handleClear} id="clear">
            CLEAR
          </button>
        </div>
      </form>
    );
  }
}

export default InputForm;

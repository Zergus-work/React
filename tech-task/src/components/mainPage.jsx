import React, { Component } from "react";
import "./mainPageStyle.css";

class MainPage extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <div className="header">
          <h2 className="label">ADMIN.BIKE-BOOKING.COM</h2>
        </div>
        <div className="container-home">
          <div className="product column ">Bycicle</div>
          <div className="information column">
            <div className="container-input">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Type" />
              <input type="text" placeholder="Color" />
              <input type="text" placeholder="Wheel size" />
              <input type="text" placeholder="Price" />
              <input type="text" placeholder="ID(slug):XXXXXXXXXXXXX" />
              <input className="descr" type="text" placeholder="Descriprion" />
              <div></div>
              <button>SAVE</button>
              <button>CLEAR</button>
            </div>
            <div className="statistic">
              <h2 className="stats">STATISTICS</h2>
              <span>
                Total bikes: <span id="numInfo">15</span>
              </span>
              <span>
                Avaible Bikes: <span id="numInfo"> 0</span>
              </span>
              <span>
                Booked Bikes: <span id="numInfo"></span>456
              </span>
              <span>
                Average bike cost: <span id="numInfo"> 21 UAH/hr.</span>
              </span>
            </div>
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

import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import BRN from "./Pages/BRN";
import EVE from "./Pages/EVE";
import GasPrice from "./Pages/GasPrice";
import EtherValue from "./Pages/EtherValue";

const Items = styled.div`
  text-align: center;
  height: 80vh;
`;

export default class Section extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <h2>MARKET INFOMATION</h2>
        <Slider {...settings}>
          <Items>
            <h1>
              <BRN />
            </h1>
          </Items>
          <Items>
            <h1>
              <EVE />
            </h1>
          </Items>
          <Items>
            <h1>
              <GasPrice />
            </h1>
          </Items>
          <Items>
            <EtherValue />
          </Items>
        </Slider>
      </div>
    );
  }
}

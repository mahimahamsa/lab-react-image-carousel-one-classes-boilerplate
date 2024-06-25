import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  state = {
    currentImageIndex: 0
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        prevState.currentImageIndex === images.length - 1
          ? 0
          : prevState.currentImageIndex + 1
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        prevState.currentImageIndex === 0
          ? images.length - 1
          : prevState.currentImageIndex - 1
    }));
  };

  render() {
    const { currentImageIndex } = this.state;
    const { img, title, subtitle } = images[currentImageIndex];

    return (
      <div className="carousel">
        <ArrowBackIosIcon className="arrow arrow-left" onClick={this.handlePrev} />
        <div className="image-container">
          <img src={img} alt="Carousel Image" />
          <div className="caption">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>
        <ArrowForwardIosIcon className="arrow arrow-right" onClick={this.handleNext} />
      </div>
    );
  }
}

export default Carousel;

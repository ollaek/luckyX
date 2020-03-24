import React from "react";
import "./OfferImagesSlider.scss";

const OfferImagesSlider = (props: any) => {
  return (
    <div className="OfferImagesSlider">
      {/* <Carousel>
     <Carousel.Item className="">
          <div>
            <img
              
              src={require("../../../../assets/img/offer-cookdoor1.jpg")}
              alt=""
            />
          </div>
        </Carousel.Item>
        <Carousel.Item className="">
          <div>
            <img
            
              src={require("../../../../assets/img/offer-cookdoor1.jpg")}
              alt=""
            />
          </div>
        </Carousel.Item>
        <Carousel.Item className="">
          <div>
            <img
             
              src={require("../../../../assets/img/offer-cookdoor1.jpg")}
              alt=""
            />
          </div>
        </Carousel.Item>
      </Carousel>
     */}

      <div
        id="carousel-thumb"
        className="carousel slide carousel-fade carousel-thumbnails"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          {props.offerImages.length > 0 &&
            (props.offerImages || []).map((img, index) => {
              return (
                <div className={`carousel-item ${(index === 0) ? "active" : ""}`} key={`${img.Name}${img.Type}`}>
                  <img
                   src={`${img.Url}${img.Name}`} alt={img.Name}
                  />{" "}
                </div>
              );
            })}
        </div>

        <a
          className="carousel-control-prev"
          href="#carousel-thumb"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-thumb"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
        <ol className="carousel-indicators">
          {props.offerImages.length > 0 &&
            (props.offerImages || []).map((img, index) => {
              return (
                <li
                  data-target="#carousel-thumb"
                  data-slide-to={index}
                  className={
                    index === 0 ? "active" : ""
                  }
                  key={`${img.Url}${img.Name}`}
                >
                  <img src={`${img.Url}${img.Name}`} alt={img.Name} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default OfferImagesSlider;

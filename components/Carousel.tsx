"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={2000}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <img
          key={i}
          src={`/Images/img${i}.jpg`}
          className="aspect-square rounded-lg"
          alt="testimonial"
        />
      ))}
    </Carousel>
  );
};

export default Testimonials;

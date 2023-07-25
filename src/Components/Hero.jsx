import React from "react";
import Banner from "../assets/banner1.png";

const Hero = () => {
  return (
    <section className="py-36 w-full flex justify-center items-center min-h-screen">
      <div className="container flex justify-center items-center">
        <img src={Banner} alt="" />
      </div>

      <svg
        className="absolute bottom-0"
        width="100%"
        height="62"
        viewBox="0 0 1440 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1725_909)">
          <path
            d="M435.652 43.8652H-2V717H1442V13H1219.92L1187.41 43.8652H1032.86L999.347 13H466.162L435.652 43.8652Z"
            stroke="#00F6FF"
            stroke-width="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1725_909">
            <rect width="1440" height="62" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default Hero;

import React from "react";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
// import image from "../../../../assets/img/about/crative.jpg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import image from '../../../../assets/img/GallerySection/science2.jpg';

const CustomerFavorites = () => {
  return (
    <div className="flex flex-wrap items-center md:mx-28">
      <div className="md:w-1/2 mx-auto">
        <TransformWrapper
          initialScale={1}
          initialPositionX={200}
          initialPositionY={100}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <div className="tools text-end">
                <button
                  className="bg-error px-5 py-2 rounded-lg"
                  onClick={() => zoomIn()}
                >
                  Zoom in+
                </button>
                <button
                  className="bg-error px-5 py-2 rounded-lg mx-2 md:mx-5"
                  onClick={() => zoomOut()}
                >
                  Zoom out -
                </button>
                <button
                  className="bg-error px-5 py-2 rounded-lg"
                  onClick={() => resetTransform()}
                >
                  Reset x
                </button>
              </div>
              <TransformComponent>
                <img src={image} alt="test" />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
      <div className="md:w-1/2 pl-5 my-10 md:my-0 md:pl-20">
        <h1 className="text-xl md:text-2xl font-bold">Plastic Robert</h1>
        <p className="flex gap-1 text-orange-500 my-2">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStarHalfAlt></FaStarHalfAlt>
        </p>
        <p className="">
          Every child&apos;s childhood includes toys inextricably. Toys are
          learning tools that assist kids in understanding a scale model of
          social...
        </p>
        <div className="flex gap-6 items-center ">
          <h3>$5.49</h3>
          <p className="bg-orange-400 px-4 py-1 my-2">Sale</p>
        </div>
        <button className="mt-4 py-3 px-5 bg-error font-bold rounded-xl">Add to Cart</button>
      </div>
    </div>
  );
};

export default CustomerFavorites;

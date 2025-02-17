import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function ProductCards({ content, isBuyable }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container p-4">
      <Slider {...settings} className="gap-x-4">
        {content.map((product, productIndex) => (
          <div key={productIndex} className="p-2">
            <div className="border rounded-lg p-4 shadow-md">
              {/* Product Image */}
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              {/* Product Name */}
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>

              {/* Product Price & Buy Button */}
              {product?.price && (
                <p className="mt-2 text-xl font-bold text-gray-800">
                  ${product.price}
                </p>
              )}

              {/* Buy Button if Buyable */}
              {isBuyable && (
                <button className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  Buy Now
                </button>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCards;

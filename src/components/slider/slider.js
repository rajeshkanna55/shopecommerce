import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function ProductCards({ content, isBuyable, isViewable }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
          slidesToShow: 1.75,
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
            <div className="rounded-lg py-4 ">
              {/* Product Image */}
              <div className="relative w-full h-32">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  style={{borderRadius: isViewable ? '50%' : '8px' }}
                />
              </div>
              {/* Product Name */}
              {!isViewable && <h3 className="mt-4 text-sm font-semibold">{product.name}</h3> }

              {/* Product Price & Buy Button */}
              {product?.price && (
                <p className="mt-2 text-md font-bold text-gray-800">
                  ${product.price}{' '}
                  <del className="text-xs text-gray-600">{' '}$1300</del>
                </p>
              )}

              {/* Buy Button if Buyable */}
              {isBuyable && (
                <button className="mt-4 w-full py-2 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-blue-700 transition">
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

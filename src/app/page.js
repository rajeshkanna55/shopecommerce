"use client";
import Image from "next/image";
import { useState } from "react";
import dataJs from "./lib/data.json";
import ProductCards from "@/components/slider/slider";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false),
    [data, setData] = useState(dataJs);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleFilter = (e) => {
    const { value } = e.target;
    console.log(value);
    const filtered = data.filter(
      (item) => {
        if (item.type === "products") {
          return item.productType
            .toLowerCase()
            .includes(value.toLowerCase());
        }
        return true;
      });
    setData(filtered)
  };
  return (
    <>
      <header  style={{ background: "linear-gradient(to bottom, #ECDCFF, #fff)" }}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <Image
              src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.52.1/images/header/primary-logo.svg"
              alt="Profile"
              width={100}
              height={40}
              className="rounded-full h-10 w-"
            />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search..."
              style={{width: '55vw'}}
              onChange={handleFilter}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Profile Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/images/portrait-6040876_1280.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/portrait-6040876_1280.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu (Collapsible) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col space-y-4 p-4">
              {/* Input Field */}
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Profile Logo */}
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/portrait-6040876_1280.jpg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="px-4 py-2">
        {data &&
          data.map((item, index) => (
            <div key={index} className="w-full p-2">
              {item.type === "banner" ? (
                <>
                  <div className="w-full">
                    <Image
                      src={item?.image} // image URL
                      alt="Example Image"
                      layout="responsive" // This ensures the image is responsive
                      width={1920} // Set the original width of the image
                      height={1080} // Set the original height of the image
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full p-4">
                    <h1 className="text-2xl font-semibold mb-3">
                      {item?.productType}
                    </h1>
                    <ProductCards
                      content={item?.content}
                      isBuyable={item?.isBuyable}
                      isViewable={item?.isViewable}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

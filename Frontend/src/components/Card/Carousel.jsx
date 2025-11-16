import React, { useState } from "react";

const slidesData = [
  {
    id: 1,
    title: "Mountain Adventure",
    description:
      "Enjoy the breathtaking views and the thrill of climbing the majestic mountains.",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: 2024,
  },
  {
    id: 2,
    title: "Beach Relaxation",
    description:
      "Experience peace and calm on golden sands with crystal clear waters.",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: 2025,
  },
  {
    id: 3,
    title: "Forest Camping",
    description:
      "Reconnect with nature and enjoy a quiet night under a blanket of stars.",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: 2024,
  },
  {
    id: 4,
    title: "City Lights",
    description:
      "Explore vibrant nightlife, modern architecture, and endless entertainment.",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: 2025,
  },
];

const Carousel = () => {
  const [data, setData] = useState(slidesData);

  return (
    <div className="flex justify-center items-center py-2 px-2 md:px-5">
      <div className="carousel w-full md:w-[80vw] lg:w-[70vw] h-[40vh] md:h-[60vh] lg:h-[70vh] rounded-lg shadow-xl">
        {data.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-full"
          >
            <img
              src={slide.imgUrl}
              alt={slide.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 md:left-5 md:right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? data.length : index}`}
                className="btn btn-circle btn-sm md:btn-md"
              >
                ❮
              </a>
              <a
                href={`#slide${index === data.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle btn-sm md:btn-md"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

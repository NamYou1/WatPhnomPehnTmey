import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialData = [
  {
    id: 1,
    title: "Mountain Adventure",
    description:
      "Enjoy the breathtaking views and the thrill of climbing the majestic mountains.",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Beach Relaxation",
    description:
      "Experience peace and calm on golden sands with crystal clear waters.",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    title: "Forest Camping",
    description:
      "Reconnect with nature and enjoy a quiet night under a blanket of stars.",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    title: "City Lights",
    description:
      "Explore vibrant nightlife, modern architecture, and endless entertainment.",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const Home = () => {
  const [activities] = useState(initialData);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* 🌄 Carousel - Centered and 70% size */}
      <div className="flex justify-center items-center py-5">
        <div className="carousel w-[70vw] h-[70vh] rounded-lg shadow-xl">
          {initialData.map((slide, index) => (
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
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${
                    index === 0 ? initialData.length : index
                  }`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${
                    index === initialData.length - 1 ? 1 : index + 2
                  }`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🧭 Section Title */}
      <h2 className="text-3xl font-bold text-center  mb-4 text-primary">
        Featured Activities
      </h2>

      {/* 🏕️ Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
        {activities.map(({ id, imgUrl, title, description }) => (
          <div
            key={id}
            className="card bg-base-100 shadow-md hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleCardClick(id)}
          >
            <figure>
              <img
                src={imgUrl}
                alt={title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">{title}</h2>
              <p className="text-sm text-gray-500">{description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
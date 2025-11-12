import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import the same activity data from Home
const initialData = [
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

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState(null);

  // Find the current activity by ID
  const currentActivity = initialData.find((item) => item.id === parseInt(id));

  // Get unique years from all activities
  const uniqueYears = [...new Set(initialData.map((item) => item.year))].sort(
    (a, b) => b - a
  );

  // Filter related activities (exclude current activity, filter by selected year or all)
  const relatedActivities = selectedYear
    ? initialData.filter(
        (activity) => activity.id !== currentActivity?.id && activity.year === selectedYear
      )
    : initialData.filter((activity) => activity.id !== currentActivity?.id);

  if (!currentActivity) {
    return (
      <div className="container mx-auto p-4 text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Activity Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto p-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="btn btn-ghost mb-6"
        >
          ← Back to Home
        </button>

        {/* Main Detail Card */}
        <div className="card lg:card-side bg-base-100 shadow-2xl mb-12">
          <figure className="lg:w-1/2">
            <img
              src={currentActivity.imgUrl}
              alt={currentActivity.title}
              className="w-full h-96 object-cover"
            />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-3xl mb-2">{currentActivity.title}</h2>
            <p className="text-sm badge badge-primary">{currentActivity.year}</p>
            <div className="space-y-4">
              <p className="text-lg">{currentActivity.description}</p>
              <div className="divider"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">About This Activity</h3>
                <p>This is a featured activity from our collection. Experience the best that nature and adventure have to offer. Click below to watch the video tour or explore related activities.</p>
              </div>
              <div className="divider"></div>
              <div className="card-actions justify-end">
                <a
                  href={currentActivity.vdourl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Activities Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">
            More Activities
          </h2>

          {/* 📅 Year Filter */}
          <div className="flex justify-center gap-3 mb-6 flex-wrap px-4">
            <button
              onClick={() => setSelectedYear(null)}
              className={`btn ${
                selectedYear === null ? "btn-primary" : "btn-outline"
              }`}
            >
              All Activities
            </button>
            {uniqueYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`btn ${
                  selectedYear === year ? "btn-primary" : "btn-outline"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* No results message */}
          {relatedActivities.length === 0 && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">
                No other activities found for year {selectedYear}
              </p>
            </div>
          )}

          {/* Related Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10">
            {relatedActivities.map(({ id: actId, imgUrl, title, description, year }) => (
              <div
                key={actId}
                className="card bg-base-100 shadow-md hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => navigate(`/details/${actId}`)}
              >
                <figure>
                  <img
                    src={imgUrl}
                    alt={title}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-lg font-semibold">{title}</h3>
                  <p className="text-xs text-primary font-semibold">{year}</p>
                  <p className="text-sm text-gray-500">{description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary">View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
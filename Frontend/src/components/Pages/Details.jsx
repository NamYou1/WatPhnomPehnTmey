import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <button 
        onClick={() => navigate('/')}
        className="btn btn-ghost mb-4"
      >
        ← Back to Home
      </button>
      
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="w-full h-96 object-cover"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl">Card Title</h2>
          <div className="space-y-4">
            <p className="text-lg">A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="divider"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Additional Details</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="divider"></div>
   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
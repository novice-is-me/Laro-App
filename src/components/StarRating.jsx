import React from 'react';

const StarRating = ({ rating, className }) => {
  // Total number of stars
  const totalStars = 5;

  // Create an array of stars to render
  let stars = [];
  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <span
        key={i}
        className={`${i < rating ? 'text-yellow-500' : 'text-gray-300'} ${className}`}
      >
        ★
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;

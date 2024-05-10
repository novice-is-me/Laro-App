import React from 'react';

const StarRating = ({ rating, size }) => {
  // Total number of stars
  const totalStars = 5;

  // Create an array of stars to render
  let stars = [];
  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <span
        key={i}
        className={i < rating ? `text-yellow-500 text-${size} rounded-full inline-block` : 'text-gray-300'}
        style={{ fontSize: size }} // Set font size dynamically
      >
        ★
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;

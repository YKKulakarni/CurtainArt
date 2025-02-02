import React from 'react';

const PhotoGrid = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map((photo, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          <img src={photo.url} alt={photo.alt || `Photo ${index + 1}`} className="w-full h-auto object-cover aspect-square hover:scale-105 transition" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;

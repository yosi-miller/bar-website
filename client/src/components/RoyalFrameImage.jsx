import React from 'react';

const RoyalFrameImage = ({ src, alt }) => {
  return (
    <div className='royal-frame'>
      <img src={src} alt={alt} />
    </div>
  );
};

export default RoyalFrameImage;

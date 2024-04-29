import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ image }) => {
  return (
    <div className='flex items-center justify-center text-center'>
      <Link to={`/image/${image.id}`}>
        <img src={image.source} />
        <h1 className='text-white text-xl font-josefin'>{image.title}</h1>
      </Link>
    </div>
  );
}

export default Image;

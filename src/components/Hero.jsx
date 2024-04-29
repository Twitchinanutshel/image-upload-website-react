import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-semibold mt-32'>Beep Photo Gallery</h1>
      <p className='text-2xl text-center w-3/6 mt-3'>
        Scroll down to see some photos
        <br />
        Use header to Add Photos
        <br />
        Enjoy! :)
      </p>
    </div>
  );
}

export default Hero;

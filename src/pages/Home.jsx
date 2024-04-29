import React from 'react';
import NavButtons from '../components/NavButtons';
import Hero from '../components/Hero';
import ImageListings from '../components/ImageListings';
import beepLandscape from '../assets/beep-landscape.webp'


const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center h-screen font-josefin text-white" style={{ backgroundImage: `url(${beepLandscape})` }}>
        <Hero />
      </div>
      <div className='flex justify-center items-center mt-12'>
        <ImageListings isHome={true}/>
      </div>
    </div>
  );
}

export default Home;

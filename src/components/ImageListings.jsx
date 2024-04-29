import React, { useEffect, useState } from 'react'
import Image from './Image'

const ImageListings = ({ isHome = false }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const apiUrl = isHome ? '/api/images?_limit=3' : '/api/images';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.log('error:', error);
      }
    }
    
    fetchImages();
  }, [])

  return (
    <div className='text-white text-xl font-josefin'>
      <h1 className='flex justify-center mb-12 text-5xl'>{isHome ? 'Recent Images' : 'All Images'}</h1>
      <div className='grid grid-cols-3 gap-x-72 gap-y-12 m-4'>
        {images.map((image) => (
          <Image image={image} key={image.id} />
        ))}
      </div>
    </div>
  )
}

export default ImageListings

import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getIndex) {
    setRating(getIndex);
  }
  function handleMouseEnter(getIndex) {
    setHover(getIndex)
  }
  function handleMouseLeave() {
    setHover(rating)
  }

  return (
    <div className='flex flex-col items-center p-16'>
      <div className='text-white font-josefin text-4xl mb-2'>Rate This Website!</div>
      <div className='flex'>
        {
          [...Array(noOfStars)].map((_, index) => {
            index += 1;

            return <FaStar
              key={index}
              className={index <= hover ? 'text-yellow-500 cursor-pointer' : 'text-white cursor-pointer'}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={70}
            />
          })
        }
      </div>
    </div>
  )
}

export default Rating

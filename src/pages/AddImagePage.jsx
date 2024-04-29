import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddImagePage = ({ addImageSubmit }) => {
  const [title, setTitle] = useState('');
  const [source, setSource] = useState(null);
  
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSource(reader.result);
    };

    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newImage = {
      title,
      source
    };
    addImageSubmit(newImage);

    toast.success('Photo Added')

    return navigate('/images-page');
  }

  return (
    <div className='mt-40 flex justify-center text-center'>
      <form className='text-white font-josefin bg-slate-700 p-8 rounded-md shadow-lg flex flex-col justify-center' onSubmit={submitForm}>
        <h1 className='text-4xl mb-5'>Add Your Photo</h1>
        <input
          className='text-xl'
          type='file'
          onChange={handleImageChange}
          accept='image/*'
          required
        />
        {source && (
          <div className='flex justify-center m-4'>
            <img
              src={source}
              alt='user-img'
              className='max-h-96 max-w-96'
            />
          </div>
        )}
        {source && (
          <input
            type='text'
            placeholder='Name your photo'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='text-black text-lg'
          />
        )}

        <button
          type='submit'
          className='text-3xl mt-4 p-4 rounded-lg bg-gray-800 hover:bg-slate-800'
        >
          Submit Photo
        </button>
      </form>
    </div>
  );
};

export default AddImagePage;

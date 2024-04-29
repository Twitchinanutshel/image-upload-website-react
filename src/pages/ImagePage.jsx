// page for singular image, when user clicks on an image they are brought here
import React from 'react'
import { useParams, useLoaderData, useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';




const ImagePage = ({ deleteImage }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const image = useLoaderData();

  const onDeleteClick = (imageId) => {
    const confirm = window.confirm('Are you sure you want to delete this photo?')

    if (!confirm) return;

    deleteImage(imageId)

    toast.success('Photo Deleted')

    navigate('/images-page')
  }

  

  return (
    <div className='flex justify-center text-white font-josefin text-3xl'>
      <button className='absolute left-0 text-2xl bg-red-500 p-1 m-3 rounded-lg' onClick={ () => onDeleteClick(image.id)}>Delete Photo</button>
      <div className='flex flex-col items-center mt-40'>
        <img src={image.source} className='rounded-lg bg-slate-700 p-3' style={{ maxHeight: 500 }} /* style used here for max-height since tailwind is limited with that */ />
        <h1>{image.title}</h1>
      </div>
    </div>
  )
}

const imageLoader = async ({ params }) => {
  const res = await fetch(`/api/images/${params.id}`);
  const data = await res.json();
  return data;
}

export { ImagePage as default, imageLoader }

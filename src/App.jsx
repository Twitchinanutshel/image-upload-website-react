import './App.css'
import Home from './pages/Home'
import AddImagePage from './pages/AddImagePage'
import ImagesPage from './pages/ImagesPage'
import ImagePage, { imageLoader } from './pages/ImagePage'
import NavButtons from './components/NavButtons'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

function App() {
  document.body.style.backgroundColor = '#1F2937'

  // add new image
  const addImage = async (newImage) => {
    const res = await fetch('/api/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newImage)
    });
    return;
  }

  // delete image 
  const deleteImage = async (id) => {
    const res = await fetch(`/api/images/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavButtons/>}>
        <Route index path='/' element={<Home />} />
        <Route path='/images-page' element={<ImagesPage />} />
        <Route path='/add-image' element={<AddImagePage addImageSubmit={addImage}/>} />
        <Route path='/image/:id' element={<ImagePage deleteImage={deleteImage}/>} loader={imageLoader}/>
      </Route>
    ), { basename: "/image-upload-website-react" }
  );

  return <RouterProvider router={router} />;
}

export default App


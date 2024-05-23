import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Grow from '@mui/material/Grow';
import Story from './Components/Stroy';

function App() {
  let [photoMode, setPhotoMode] = useState(false);
  let [images, setImages] = useState([]);

  let data = [
    {
      id: 1,
      name: "Your Story",
      images : ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png","https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    },
    {
      id: 2,
      name: "Your Story",
      photo: "",
    },
    {
      id: 3,
      name: "Your Story",
      photo: "",
    },
    {
      id: 4,
      name: "Your Story",
      photo: "",
    },
    {
      id: 5,
      name: "Your Story",
      photo: "",
    },
    {
      id: 6,
      name: "Your Story",
      photo: "",
    }
  ];

  function handleOpenStory(name: any, imgs:any) {
    console.log(imgs);
    setImages(imgs);
    setPhotoMode(true);
  }
  return (
    <div className="App">
      {
        photoMode ?
          <Grow in={photoMode} >
            <div className="story-container">
              <Story setPhotoMode={setPhotoMode} data={images}/>
            </div>
          </Grow>
          :
          <>
            <header className='logo'>
              <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" />
            </header>
            <div className='story'>
              {data.map((val) => {
                return (<div className='story-card'>
                  <div className="story-box">
                    <img onClick={() => handleOpenStory(val.name, val.images)} className='story-image' src="https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                  <label>
                    {val.name}
                  </label>
                </div>)
              })}
            </div>
          </>
      }
    </div>
  );
}
export default App;

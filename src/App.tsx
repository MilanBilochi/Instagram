import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Grow from '@mui/material/Grow';
import Story from './Components/Stroy';

function App() {
  let [photoMode, setPhotoMode] = useState(false);

  let data = [
    {
      name: "Your Story",
      photo: "",
    },
    {
      name: "Your Story",
      photo: "",
    },
    {
      name: "Your Story",
      photo: "",
    },
    {
      name: "Your Story",
      photo: "",
    },
    {
      name: "Your Story",
      photo: "",
    },
    {
      name: "Your Story",
      photo: "",
    }
  ];

  function handleOpenStory(name: any) {
    setPhotoMode(true);
  }
  return (
    <div className="App">
      {
        photoMode ?
          <Grow in={photoMode} >
            <div className="story-container">
              <Story setPhotoMode={setPhotoMode}/>
            </div>
          </Grow>
          :
          <>
            <header className='logo'>
              <img className='logo' src="./assets/logo.png" alt="hello" />
            </header>
            <div className='story'>
              {data.map((val) => {
                return (<div className='story-card'>
                  <div className="story-box">
                    <img onClick={() => handleOpenStory(val.name)} className='story-image' src="https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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

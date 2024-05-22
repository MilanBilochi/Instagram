import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <div className='story-mode'>
            <img className='story-photo' src="https://assets-global.website-files.com/61005d24feea1014e5ad8d50/61005d24feea100d1cad9156_60d4beeedc5e92b152b6a824_IG-3d.jpeg" alt="" />
            <div className='floating-buttons'>
              <label className='minus'>...</label>
              <label onClick={() => {
                setPhotoMode(false);
              }}>X</label>
            </div>
          </div> :
          <>
            <header className='logo'>
              Instagram
            </header>
            <div className='story'>
              {data.map((val) => {
                return (<div className='story-card'>
                  <img onClick={() => handleOpenStory(val.name)} className='story-image' src="https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  <label>
                    {val.name}
                  </label>
                </div>)
              })}
            </div></>
      }
    </div>
  );
}

export default App;

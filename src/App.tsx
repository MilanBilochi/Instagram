import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Grow from '@mui/material/Grow';
import Story from './Components/Stroy';

const App: React.FC = () => {
  let [data, setData] = useState<any[]>([])
  let [photoMode, setPhotoMode] = useState(false);
  let [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentName, setCurrentName] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // let [storySeen, setStorySeen] = useState();
  // let [selectedUser, setSelectedUser] = useState();
  // let data = [
  //   {
  //     id: 1,
  //     name: "Your Story",
  //     images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png", "https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  //     seen: false
  //   },
  //   {
  //     id: 2,
  //     name: "Your Story",
  //     images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png", "https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  //     seen: false
  //   },
  //   {
  //     id: 3,
  //     name: "Your Story",
  //     images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png", "https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  //     seen: false
  //   },
  //   {
  //     id: 4,
  //     name: "Your Story",
  //     images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png", "https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  //     seen: false
  //   },
  //   {
  //     id: 5,
  //     name: "Your Story",
  //     images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png", "https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  //     seen: false
  //   },
  //   {
  //     id: 6,
  //     name: "Your Story",
  //     images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png", "https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  //     seen: false
  //   }
  // ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3002');
        if (!response.ok) {
          throw new Error('API Failed due to some reason')
        }
        const jsonData = await response.json();
        setData(jsonData);
        
      } catch (error) {
        console.log('something went wrong')
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []) 

  function handleOpenStory(name: any, imgs: any, id: any, time: any) {
    setCurrentName(name);
    setCurrentTime(time);
    setImages(imgs);
    setPhotoMode(true);
  }
  function setStorySeenColor(isSeen: Boolean) {
    if (!isSeen) {
      return "story-box";
    } else {
      return "story-box-seen";
    }
  }


  return (
    <div className="App">
      {isLoading && <p>Loading data...</p>}
      {
        photoMode ?
          <Grow in={photoMode} >
            <div className="story-container">
              <Story setPhotoMode={setPhotoMode} data={images} name={currentName} time={currentTime} />
            </div>
          </Grow>
          :
          <>
            <header className='logo'>
              <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" />
            </header>
            {data.length > 0 && (
              <div className='story'>
              {data.map((val) => {
                return (<div className='story-card' key={val.id}>
                  <div className={setStorySeenColor(val.seen)}>
                    <img onClick={() => handleOpenStory(val.name, val.images, val.id, val.time)} className='story-image' src={val.displyPicture} alt="" />
                  </div>
                  <label>
                    {val.name}
                  </label>
                </div>)
              })}
            </div>
            )}
          </>
      }
    </div>
  );
}
export default App;

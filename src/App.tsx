import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Grow from '@mui/material/Grow';
import Story from './Components/Stroy';

const App: React.FC = () => {

  //data fetched bu API
  let [data, setData] = useState<any[]>([])
  //state to save story is opened or cloed
  let [photoMode, setPhotoMode] = useState(false);
  //state to save images of stories
  let [images, setImages] = useState([]);
  //state to save name and time of opened stories
  const [currentName, setCurrentName] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  //Offline data since Render backend service is not workin- details in readme doc on github
  const myData = [
    {
      id: 1,
      name: "Your Story",
      images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4t8MGYhrO0c0LBuHWqcWaLC27EiHuXtLNppZO_nLsg&s", "https://instaproapks.app/wp-content/uploads/2023/11/insta-pro-768x432-1.png"],
      seen: false,
      displyPicture : "https://media.licdn.com/dms/image/D4D03AQERcri314x7Dg/profile-displayphoto-shrink_200_200/0/1677001157407?e=2147483647&v=beta&t=h3l-tAaqZPFeM30diDz_NR1ccUCq0sN89fpvCyyzAqE",
      time : "10min ago"
    },
    {
      id: 2,
      name: "Milan Bilochi",
      images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4t8MGYhrO0c0LBuHWqcWaLC27EiHuXtLNppZO_nLsg&s", "https://instaproapks.app/wp-content/uploads/2023/11/insta-pro-768x432-1.png"],
      seen: false,
      displyPicture : "https://media.licdn.com/dms/image/D4D03AQERcri314x7Dg/profile-displayphoto-shrink_200_200/0/1677001157407?e=2147483647&v=beta&t=h3l-tAaqZPFeM30diDz_NR1ccUCq0sN89fpvCyyzAqE",
      time : "10min ago"
    },
    {
      id: 3,
      name: "Kunal Kashyap",
      images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4t8MGYhrO0c0LBuHWqcWaLC27EiHuXtLNppZO_nLsg&s", "https://instaproapks.app/wp-content/uploads/2023/11/insta-pro-768x432-1.png"],
      seen: false,
      displyPicture : "https://i.pinimg.com/originals/52/c6/65/52c665df0515dd447eb92544374cf543.jpg",
      time : "10min ago"
    },
    {
      id: 4,
      name: "Namit Nehra",
      images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4t8MGYhrO0c0LBuHWqcWaLC27EiHuXtLNppZO_nLsg&s", "https://instaproapks.app/wp-content/uploads/2023/11/insta-pro-768x432-1.png"],
      seen: false,
      displyPicture : "https://m.media-amazon.com/images/I/51PZGC+DYoL._AC_UF1000,1000_QL80_.jpg",
      time : "10min ago"
    },
    {
      id: 5,
      name: "Mansi Chodhry",
      images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4t8MGYhrO0c0LBuHWqcWaLC27EiHuXtLNppZO_nLsg&s", "https://instaproapks.app/wp-content/uploads/2023/11/insta-pro-768x432-1.png"],
      seen: false,
      displyPicture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVx6BL_HOU5eU_lzT-fTsdgkJfwm3XjygM-SywNS5KNw&s",
      time : "10min ago"
    },
    {
      id: 6,
      name: "Paridi joshi",
      images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4t8MGYhrO0c0LBuHWqcWaLC27EiHuXtLNppZO_nLsg&s", "https://instaproapks.app/wp-content/uploads/2023/11/insta-pro-768x432-1.png"],
      seen: false,
      displyPicture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVx6BL_HOU5eU_lzT-fTsdgkJfwm3XjygM-SywNS5KNw&s",
      time : "10min ago"
    }
  ];

  //load data
  useEffect(() => {
    setData(myData);
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('https://instagram-re53.onrender.com');
    //     if (!response.ok) {
    //       throw new Error('API Failed due to some reason')
    //     }
    //     const jsonData = await response.json();
    //     setData(jsonData);
        
    //   } catch (error) {
    //     console.log('something went wrong')
    //   } finally {
    //     setIsLoading(false);
    //   }
    // }
    // fetchData();
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

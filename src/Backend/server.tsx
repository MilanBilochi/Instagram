

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3002;
app.use(cors());
app.use(express.json());

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

// app.get('/', (req, res) => {
//   res.json(myData); // Send JSON data
// });
app.get('/', (req:any, res:any) => {
    res.json(myData); // Send JSON data
  });
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export {}
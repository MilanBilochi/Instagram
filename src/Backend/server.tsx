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
      seen: false
    },
    {
      id: 2,
      name: "Your Story",
      images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4t8MGYhrO0c0LBuHWqcWaLC27EiHuXtLNppZO_nLsg&s", "https://instaproapks.app/wp-content/uploads/2023/11/insta-pro-768x432-1.png"],
      seen: false
    },
    {
      id: 3,
      name: "Your Story",
      images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4t8MGYhrO0c0LBuHWqcWaLC27EiHuXtLNppZO_nLsg&s", "https://instaproapks.app/wp-content/uploads/2023/11/insta-pro-768x432-1.png"],
      seen: false
    },
    {
      id: 4,
      name: "Your Story",
      images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4t8MGYhrO0c0LBuHWqcWaLC27EiHuXtLNppZO_nLsg&s", "https://instaproapks.app/wp-content/uploads/2023/11/insta-pro-768x432-1.png"],
      seen: false
    },
    {
      id: 5,
      name: "Your Story",
      images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4t8MGYhrO0c0LBuHWqcWaLC27EiHuXtLNppZO_nLsg&s", "https://instaproapks.app/wp-content/uploads/2023/11/insta-pro-768x432-1.png"],
      seen: false
    },
    {
      id: 6,
      name: "Your Story",
      images: ["https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4t8MGYhrO0c0LBuHWqcWaLC27EiHuXtLNppZO_nLsg&s", "https://instaproapks.app/wp-content/uploads/2023/11/insta-pro-768x432-1.png"],
      seen: false
    }
  ];

app.get('/', (req:any, res:any) => {
  res.json(myData); // Send JSON data
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export {}
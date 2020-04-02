import React from "react";



const state = [
  {
    id : 0,
    name: "hulk",
    img: 'https://wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg'
  },
  {
    id : 2,
    name: "hulk",
    img: 'https://wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg'
  },
  {
    id : 3,
    name: "hulk",
    img: 'https://wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg'
  },
  {
    id : 4,
    name: "hulk",
    img: 'https://wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg'
  },
  {
    id : 5,
    name:"hulk",
    img: 'https://wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg'
  },
];

export const HeroContext = React.createContext(state);
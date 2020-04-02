import Axios from 'axios';
import Crypto from 'crypto-js';

const API_KEY = '2dc9ce9f3db383f25c333aa91d066dcf';
const PRIV_KEY = 'ff5b9b365db19d96f6187e51c4b00217adacf49e';
const URI = 'https://getway.marvel.com/v1/public/characters/';

export const fetchHero = (id) =>{
  const ts = new Date().getTime();
  let hash = Crypto.MD5(ts+ PRIV_KEY + API_KEY);
  hash = hash.toString(Crypto.enc.Hex);
  console.log(`${URI}${id}?apiKey=${API_KEY}&ts=${ts}&hash=${hash}`);

  // return Axios.get(`${URI}${id}?apiKey=${API_KEY}&ts=${ts}&hash=${hash}`).then(res => res.data.data.results);
  return Axios.get(URI + id + "?apikey=" + API_KEY + "&ts" + ts + "&hash=" + hash).then(res => res.data.data.results)
}

export const fetchHeroes = (name) =>{
  const ts = new Date().getTime();
  let hash = Crypto.MD5(ts+ PRIV_KEY + API_KEY);
  hash = hash.toString(Crypto.enc.Hex);

  return Axios.get(`${URI}${name}&apiKey=${API_KEY}&ts=${ts}&hash=${hash}`).then(res => res.data.data.results);
  // return Axios.get(URI + )
}


export const heroFech = () =>{
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

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: state });
    }, 500);
  });

}
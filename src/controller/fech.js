import Axios from 'axios';
import Crypto from 'crypto-js';

const limit = 100;
const modifiedSince = 1990;



const HERO_FECH = 'https://gateway.marvel.com:443/v1/public/characters/';
const HEROS_FECH = 'https://gateway.marvel.com:443/v1/public/characters';
   
const hashApi = () =>{
  let ts = new Date().getTime();
  let hash = Crypto.MD5(ts+ PRIV_KEY + API_KEY);
  hash = hash.toString(Crypto.enc.Hex);

  return {ts , hash}
}

export const fetchHero = (id) =>{
  let {ts , hash} = hashApi();

  return Axios.get(HERO_FECH+id,{ params:{ apikey: API_KEY, ts,hash} })
}

export const fetchHeroes = (name) =>{
  // console.log(name);
  let {ts , hash} = hashApi();
  return Axios.get(HEROS_FECH,{ params:{ nameStartsWith:name, apikey: API_KEY, ts,hash} })
}

export const fetchHeroesRandon = () =>{
  
  let {ts , hash} = hashApi();
  // console.log(`https://gateway.marvel.com:443/v1/public/characters?modifiedSince=${modifiedSince}&limit=${limit}&apikey=${API_KEY}&ts=${ts}&hash=${hash}`);
  return Axios.get(HEROS_FECH,{params:{modifiedSince,limit,apikey: API_KEY, ts,hash}}) 
}

export const fechComicImg = (url)=>{
  let {ts , hash} = hashApi();
  return Axios.get(url,{ params:{ apikey: API_KEY, ts,hash} })
}
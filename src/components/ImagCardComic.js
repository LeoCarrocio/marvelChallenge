import React,{useState, useEffect} from 'react';

import {fechComicImg} from '../controller/fech';
import {urlImgComic} from '../controller/general';


const ImagCardComic = ({urlComic}) =>{
 
  const [imgComic, setImgComic] = useState();
  
  const comicSearch = async (url) =>{
    if(url){
      let res = await fechComicImg(url);
      return res;
    }
  }

  useEffect(()=>{
    comicSearch(urlComic).then(res=>setImgComic(res.data.data.results[0].thumbnail.path));
  })
  
  return <img src={urlImgComic(imgComic)} alt="Logo" />

}
export default ImagCardComic;
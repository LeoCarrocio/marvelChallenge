import React,{useState , useEffect} from 'react';
import styled from 'styled-components';

import {fechComicImg} from '../controller/fech';
import {urlImgComic} from '../controller/general';

const Contains = styled.div`
  display: grid;

`



const CardComic = (comic) =>{
  // console.log(comic)
  const [titulo, setTitulo] = useState();
  const [imagen , setImagen] = useState();
  // const [descripcion , setDescripcion] = useState();


  const comicSearch = async (url) =>{
    let res = await fechComicImg(url);
    return res;
  }

  useEffect(() => {
    setTitulo(comic.comic.name);
    comicSearch(comic.comic.resourceURI).then(res=>setImagen(res.data.data.results[0].thumbnail.path));
  },[]);


  return (
    <Contains>
      <h3>{titulo}</h3>
    
      <img src={urlImgComic(imagen)} alt="Logo" />

    </Contains>

  );
}

export default CardComic;
import React,{useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';

import {fechComicId} from '../../controller/fech';
import {urlImgBig} from '../../controller/general';

const Contains = styled.div`
  display: grid;
  margin: 5px;
  grid-template-columns: 1fr 1fr;

  .imagen{
    grid-column: 1/2;
  }

  .descripcion{
    grid-column: 2/3;
  }
  `

const Comic = () =>{
  const [comic, setComic]= useState();
  const {comicId} = useParams();
  
  const fechComic = async(id) =>{
    let res = await fechComicId(id);
    return res;
  }
  
  
  useEffect(()=>{
    fechComic(comicId).then(res=>setComic(res.data.data.results[0]));
  },[])

  return(
    <div>
      {comic ? 
        <Contains>
          <div className="imagen">
            <h3>{comic.title}</h3>
            <img src={urlImgBig(comic.images[0])} alt="Logo" />
          </div>
          <div className="descripcion">
            <h2>Description :</h2>
            <p>{comic.description}</p>
            <h3>URL :</h3>
            {comic.urls.map((url,i)=>{
              return <a key={i} href={url.url}>View comic </a>
            })}
          </div>
        </Contains>
       :
        <h4>cargando...</h4> }
    </div>
  )



}
export default Comic;
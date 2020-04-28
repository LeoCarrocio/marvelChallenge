import React,{useState , useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";


import ImagCardComic from './ImagCardComic'

import {deconstructId} from '../controller/general'

const Contains = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);

  .imagen{
    grid-column: 1/2;
  }
  .titulo{
    grid-column: 2/3;
  }
`

const CardComic = (comic) =>{
  const [comics , setComics] = useState([]);

  let history = useHistory();
  

  const viewsComic = (e,url) =>{
    e.preventDefault();
    let id = deconstructId(url);
    history.push(`/comic/${id}`);
  }

  useEffect(() => {
    setComics(comic.comics);
  },[comic, comics]);


  return (
    <div>
      { comics? comics.map((items,index)=>{
        return( 
          <Contains>
            <div className ="imagen" key={index}>
             <ImagCardComic  urlComic={items.resourceURI}/>
            </div>
            <div className="titulo">
              <button onClick={(e)=>viewsComic(e,items.resourceURI)}>
                <h3>{items.name}</h3>
              </button>
            </div>
          </Contains>
        )
      })
      :<div>Cargando...</div>
      } 
    </div>
  );
}

export default CardComic;
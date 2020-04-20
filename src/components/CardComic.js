import React,{useState , useEffect} from 'react';
import styled from 'styled-components';

import ImagCardComic from './ImagCardComic'

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
              <h3>{items.name}</h3>
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
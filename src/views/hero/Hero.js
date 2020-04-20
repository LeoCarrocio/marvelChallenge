import React,{useState, useEffect,useContext } from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';

import {HeroContext} from '../../context/ContextApp';
import CardComic from '../../components/CardComic';


const Contains = styled.div`
  display: grid;
  margin: 5px;
  grid-template-columns: 1fr 1fr;

  .img-hero{
    grid-column: 1 / 2;
  }
  .data-hero{
    grid-column: 2 / 3;
  }
`

const Hero = () =>{
 
  const hero = useContext(HeroContext);
  const {heroId} = useParams();
  const character= hero[parseInt(heroId,10)];

  console.log(character);

  const [heroe , setHeroe]= useState({
    nombre:'',
    descripcion:'',
    comicsArray:[],
    imagen:''
  })
  
  useEffect(()=>{
    if(character){
      let {name, description, thumbnail, comics} = character;
      setHeroe({
        nombre:name,
        descripcion:description,
        comicsArray :comics.items,
        imagen: thumbnail.path+"/portrait_uncanny.jpg"
      })
    }
  },[]);
  
  return(
    <div>
    { character ?
      <Contains>
        <div className='img-hero'>
          <img src={heroe.imagen} alt="nombre"/> 
        </div>
        <div className='data-hero'>
          <h1>{heroe.nombre}</h1>
          <p>{heroe.descripcion}</p>
          <h3>comic</h3>
          <div>
            {heroe.comicsArray.map((comic,index) => {
              return <CardComic key={index}  comic= {comic}/>
             })
            }
            
          </div>
        </div> 
      </Contains>
    :
     <div>
       cargando...
     </div>}
    </div>
    
  )
}

export default Hero;
import React,{useState, useEffect,useContext } from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';

import {HeroContext} from '../../context/ContextApp';


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
  // const [hero, setHero] = useState();
  const hero = useContext(HeroContext);
  const {heroId} = useParams();
  const character= hero[parseInt(heroId,10)];


  console.log(character);

  // useEffect(()=>{
  //   setHero(useContext(HeroContext))

  // },[])



  return(
    <Contains>

      <div className='img-hero'>
        imagen
      </div>
      <div className='data-hero'>
        data
      </div>
    </Contains>
    
  )
}

export default Hero;
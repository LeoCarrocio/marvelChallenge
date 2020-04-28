import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

import {fetchHeroes} from '../../controller/fech';

import Card from '../../components/Card';


const Contains = styled.div`
  display: grid;
  grid-template-columns: repeat(4 , 1fr);
  grid-template-rows: repeat(2 , 380px);
  grid-gap: 10px;
  margin: 20px 30px 30px 35px;

`


const Herosearch = ({hero}) =>{
  const [heroserch, setHeroserch]= useState([]);

  const searchhero = async (search)=>{
    let result = await fetchHeroes(search);
    return result.data;

  }
  
  useEffect(()=>{

    searchhero(hero.params.hero).then(res=>setHeroserch(res.data.results))
    
  })
  
  return(
    <Contains>
      {heroserch.map((personaje, index) =>{
        return <Card key={personaje.id} character={personaje} index={index} />
        })
      }
    </Contains>

  )


}
export default Herosearch;
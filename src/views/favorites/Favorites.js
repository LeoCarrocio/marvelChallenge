import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

import {getFavoritos,arrayStorage} from '../../localStorage/storage';
import {fetchHero} from '../../controller/fech';


import Card from '../../components/Card';

const HomeContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(4 , 1fr);
  grid-template-rows: repeat(2 , 380px);
  grid-gap: 10px;
  margin: 20px 30px 30px 35px;

`

const Favorites = () =>{
  const [favoritos , setFaboritos] = useState([]);

  const serchFavoritos = async (id) =>{
     let hero = await fetchHero(id);
     console.log(hero);
     return hero.data.data.results;
  }

  const serchHero =  async (array) =>{
    // let heros = [];
    const heros = array.map(id => {
      if(id && id!==""){
        return serchFavoritos(id)
      }
  
    })
    const result = await Promise.all(heros)
    console.log(result);
    return result
    
  }

  useEffect(()=>{
   
    let storageArray = arrayStorage(getFavoritos())
    if(storageArray){
      console.log(storageArray)
      serchHero(storageArray).then(res => setFaboritos(res))
    }
  
  },[])

  return(
    <HomeContainers>
      {
        favoritos.length !== 0 ?
        // console.log(favoritos)
        favoritos.map((personaje, index) =>{
          if(personaje){
            // console.log(personaje[0]);
           return <Card key={index} character={personaje[0]} index={index} />
          }
        })
        
        :
        <h4>cargando ... </h4>

      }

    </HomeContainers>
    
  )



}
export default Favorites;
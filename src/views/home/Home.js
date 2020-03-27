import React,{useState} from 'react';
import styled from 'styled-components';
import {fetchHeroes} from '../../controller/fech';

import Card from '../../components/Card'; 

const cardImgPrueva = [
  {
    id : 0,
    name: "hulk",
    img: 'https://wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg'
  },
  {
    id : 2,
    name: "hulk",
    img: 'https://wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg'
  },
  {
    id : 3,
    name: "hulk",
    img: 'https://wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg'
  },
  {
    id : 4,
    name: "hulk",
    img: 'https://wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg'
  },
  {
    id : 5,
    name:"hulk",
    img: 'https://wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg'
  },

]

const HomeContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(4 , 1fr);
  grid-template-rows: repeat(2 , 380px);
  grid-gap: 10px;
  margin: 20px 30px 30px 35px;

`

const Home = () =>{
  const [character , setCharacter]= useState(cardImgPrueva)

  
  
  
  
  
  return(
    
    <HomeContainers>
      {character.map((personaje) =>{
        return <Card key={personaje.id} character={personaje}/>
        })
      }
    </HomeContainers>
  )
}
export default Home;
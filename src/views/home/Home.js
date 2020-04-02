import React,{useState} from 'react';
import styled from 'styled-components';
import {fetchHeroes} from '../../controller/fech';

import {HeroContext} from '../../context/ContextApp';

import Card from '../../components/Card'; 
import Modal from '../../components/Modal';

const cardImgPrueva = [
  {
    id : 0,
    name: "hulk",
    img: 'https://wipy.tv/wp-content/uploads/2020/03/pelea-de-hulk-contra-juggernaut.jpg'
  },
  {
    id : 2,
    name: "Capitan America",
    img: "https://img-cdn.hipertextual.com/files/2019/05/hipertextual-avengers-endgame-futuro-capitan-america-2019781893.jpg?strip=all&lossy=1&quality=70&ssl=1"
  },
  {
    id : 3,
    name: "Iron Man",
    img: "https://wipy.tv/wp-content/uploads/2020/02/Iron-Man-es-el-anticristo.jpg"
  },
  {
    id : 4,
    name: "Spiderman",
    img: "https://cnet2.cbsistatic.com/img/YPCm5NhRehVB6CxE2YaE4m5EyO4=/1092x0/2019/03/26/13d0a566-7355-4381-be24-dee281227504/spider-man-far-from-home-promo-image-1.jpg"
  },
  {
    id : 5,
    name:"thor",
    img: "https://areajugones.sport.es/wp-content/uploads/2020/02/thor-ragnarok-1-780x440.jpg.webp"
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
  const [character , setCharacter]= useState(cardImgPrueva);


  return(

    <HeroContext.Provider value ={character}>
    <HomeContainers>
      {character.map((personaje) =>{
        return <Card key={personaje.id} character={personaje}/>
      })
    }
    
    </HomeContainers>

    </HeroContext.Provider>
    
  )
}
export default Home;
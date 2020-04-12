import React,{useState , useEffect} from 'react';
import styled from 'styled-components';
import {fetchHeroesRandon} from '../../controller/fech';
import {HeroContext} from '../../context/ContextApp';

import {generateRandon} from '../../controller/general';

import Card from '../../components/Card'; 
// import Modal from '../../components/Modal';


const HomeContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(4 , 1fr);
  grid-template-rows: repeat(2 , 380px);
  grid-gap: 10px;
  margin: 20px 30px 30px 35px;

`

const Home = () =>{
  const [character , setCharacter]= useState([]);

  const hero = async () =>{
    let res = await fetchHeroesRandon()
    return res;
  } 
  const genrateRes =(arry) =>{
    let res = [];
    for (let i = 0; i <= 7; i++){
      let n = generateRandon();
      res.push(arry[n]);
    }
    return res;
  }

  useEffect(()=>{
    hero().then(res => setCharacter(genrateRes(res.data.data.results)));
    // setCharacter(hero());
  },[])

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
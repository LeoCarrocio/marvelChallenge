import React,{ useContext} from 'react';
import styled from 'styled-components';
import {HeroContext} from '../../context/ContextApp';


import Card from '../../components/Card'; 

const HomeContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(4 , 1fr);
  grid-template-rows: repeat(2 , 380px);
  grid-gap: 10px;
  margin: 20px 30px 30px 35px;

`

const Home = (props) =>{
 
  const hero = useContext(HeroContext);
  
  return(

    <HomeContainers>

      {hero.map((personaje, index) =>{
        return <Card key={index} character={personaje} index={index} />
        })
      }
    </HomeContainers>
    
  )
}
export default Home;
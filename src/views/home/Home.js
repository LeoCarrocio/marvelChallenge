import React,{ useEffect,useContext} from 'react';
import styled from 'styled-components';
import {HeroContext} from '../../context/ContextApp';

// import {generateRandon} from '../../controller/general';

import Card from '../../components/Card'; 

const HomeContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(4 , 1fr);
  grid-template-rows: repeat(2 , 380px);
  grid-gap: 10px;
  margin: 20px 30px 30px 35px;

`

const Home = () =>{
  // const [character , setCharacter]= useState();
  const hero = useContext(HeroContext);

  useEffect(()=>{
    // hero().then(res => setCharacter(genrateRes(res.data.data.results)));
    // setCharacter(hero());

  },[])

  return(

    // <HeroContext.Provider value ={character}>
    //   { console.log(character)}
    <HomeContainers>
      {hero.map((personaje, index) =>{
        return <Card key={personaje.id} character={personaje} index={index} />
        })
      }
    </HomeContainers>

    // </HeroContext.Provider>
    
  )
}
export default Home;
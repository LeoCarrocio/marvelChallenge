import React,{useState, useEffect} from 'react';
import { Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import { colorBackgraund } from './styles/generalConstantStyles';

import {HeroContext} from './context/ContextApp';

import {fetchHeroesRandon} from './controller/fech';
import {generateRandon} from './controller/general';

import Heder from './components/Heder';
import Home from './views/home/Home';
import Favorites from './views/favorites/Favorites';
import Hero from './views/hero/Hero';
import Herosearch from './views/heroSearch/HeroSearch';
import Waiting from './components/Waiting';

const Contains = styled.div`
  display: grid;
  height: 100vh;
  margin: 5px;
  grid-template-rows: 70px auto 15px;

  .heder-contains{
    grid-row: 1 / 2;
    align-self: center;
    
  }
  .route-contains{
    grid-row: 2 / 3;
    background: ${colorBackgraund};
  }

`

function App() {

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
    // console.log(character);
    // setCharacter(hero());
  },[])




  return (
    <div>
      <Contains>
        {character.length !== 0 ?
      <HeroContext.Provider value ={character}>
        <div className = 'heder-contins'>
          <Heder />
        </div>
        <div className = 'route-contains'>
          <Switch>
            <Route exact path='/' render={({ history }) => (<Home history={history} />)} />
            <Route exact path='/favorites' render={({ history }) => (<Favorites history={history} />)} />
            <Route exact path='/hero/:heroId' render={({ history, match }) => (<Hero history={history} heroId={match.heroId}/>)} />
            <Route exact path='/serch/:hero' render={({history, match})=>(<Herosearch history={history} hero={match}/>)} />
          </Switch>
        </div>
        </HeroContext.Provider>
        : <Waiting />}
      </Contains>
    </div>
);
}

export default App;
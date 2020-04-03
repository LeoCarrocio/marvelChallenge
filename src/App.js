import React from 'react';
import { Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import { colorBackgraund } from './styles/generalConstantStyles';


import Heder from './components/Heder';
import Home from './views/home/Home';
import Favorites from './views/favorites/Favorites';
import Hero from './views/hero/Hero';

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
  return (
    <div>
      <Contains>
        <div className = 'heder-contins'>
          <Heder />
        </div>
        <div className = 'route-contains'>
          <Switch>
            <Route exact path='/' render={({ history }) => (<Home history={history} />)} />
            <Route exact path='/favorites' render={({ history }) => (<Favorites history={history} />)} />
            <Route exact path='/hero/:heroId' render={({ history, match }) => (<Hero history={history} heroId={match.heroId}/>)} />
          </Switch>
        </div>
      </Contains>
    </div>
);
}

export default App;
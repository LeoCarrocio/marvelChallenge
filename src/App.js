import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Heder from './components/Heder';
import Home from './views/home/Home';
import Favorites from './views/favorites/Favorites';

function App() {
  return (
    <div>
      <div>
        <Heder />
      </div>
      <div>
      <Switch>
        <Route exact path='/' render={({ history }) => (<Home history={history} />)} />
        <Route exact path='/favorites' render={({ history }) => (<Favorites history={history} />)} />

      </Switch>
      </div>
    </div>

);
}

export default App;
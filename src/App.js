import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import FavoriteRecipes from './components/FavoriteRecipes';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/favorite'>
              <FavoriteRecipes />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
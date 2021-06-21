import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homePage/homePage.component';  
import  ShopPage  from './pages/shopPage/shopPage.component.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route  exact path='/' component={ HomePage } />
          <Route  exact path='/shop' component={ ShopPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

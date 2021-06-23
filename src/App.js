import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homePage/homePage.component';  
import  ShopPage  from './pages/shopPage/shopPage.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInSignUp from './pages/signInSignUp/signInSignUp.jsx';
import { auth } from './firebase/firebase.utils.js';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route  exact path='/' component={ HomePage } />
            <Route  exact path='/shop' component={ ShopPage } />
            <Route  exact path='/signIn' component={ SignInSignUp } />
          </Switch>
        </BrowserRouter>
      </div>
    );

  }

}

export default App;

import React from 'react';
import {  Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homePage/homePage.component';  
import  ShopPage  from './pages/shopPage/shopPage.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component.jsx';
import SignInSignUp from './pages/signInSignUp/signInSignUp.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selecCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';




class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });          
        });
      } 
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route  exact path='/' component={ HomePage } />
            <Route  path='/shop' component={ ShopPage } />
            <Route  exact path='/signIn' render={() => this.props.currentUser ? (<Redirect to='/'/>) : <SignInSignUp/>}/>
            <Route  exact path='/checkout' component={ CheckoutPage } /> 
          </Switch>
      </div>
    );

  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selecCurrentUser
});


const  mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import './App.css';
import Signup from "./components/Signup";
import { 
  BrowserRouter as Router,
 Route,} from "react-router-dom";
import { auth } from "./firebase"

class App extends Component {

  state = {
    authUser: auth.currentUser,

  }

  fetchAuthedUser = (authUser) => {

    console.log("fetchAuthedUser fetched a user: ", authUser);

    authUser
      ? this.setState(() => ({authUser}))
      : this.setState(() => ({ authUser: null}));
  }

  render() {

    const { authUser } = this.state;

    if(authUser) {
      return <h1> Hi </h1>
    } else {
      return (

        <div className="App">
          <Router>
            <Route path="/" render={props => <Signup fetchUser={this.fetchAuthedUser} />} />
          </Router>
        </div>
      );
    }
    }
    
}

export default App;

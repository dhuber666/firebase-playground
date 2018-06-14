import React from 'react';
import { auth } from "../firebase";

class Signup extends React.Component {

    state = {
        email: "",
        password: ""
    }

    componentDidMount() {
        auth.onAuthStateChanged(authUser => {
            this.props.fetchUser(authUser);
        })
    }

    onSignUpClick = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        auth.createUserWithEmailAndPassword(email, password).catch((e) => {
            console.log("There was an error. The message was: ", e.message);
        })
    }

    render() {
        return (
            <div>
                <h1>Sign up</h1>
                <form onSubmit={this.onSignUpClick}>
                    <label>Your email:  
                        <input type="email" placeholder="test@test.com" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                    </label>
                    <label>Your password: 
                        <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                    </label>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default Signup;
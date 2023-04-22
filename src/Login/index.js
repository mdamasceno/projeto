import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firabase';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            senha:"",
        }

        this.submit = this.submit.bind(this);
    }

    async submit(){
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).then( async (result) => {
            window.location.href = "./conta";
        }).catch((e) => {
            console.log(e);
            alert('Usuário e/ou senha inválidos!');
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <Link to="/">retornar a página inicial</Link>
                <hr />

                <div className='form'>
                    <input type='text' placeholder='E-mail' onChange={ (e) => this.setState({email: e.target.value}) } />
                    <input type='text' placeholder='Senha' onChange={ (e) => this.setState({senha: e.target.value}) } />
                    <button onClick={this.submit}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;
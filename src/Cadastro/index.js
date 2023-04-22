import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firabase';

class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            nome:"",
            sobrenome:"",
            nascimento:"",
            senha:"",
        }

        this.submit = this.submit.bind(this);
    }

    async submit(){
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).then(async (result) => {
            await firebase.firestore().collection("usuario").doc(result.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                nascimento: this.state.nascimento
            });

            alert('Salvo com sucesso');

            window.location.href = "./login";
        });
    }

    render(){
        return(
            <div>
                <h1>Cadastro</h1>
                <Link to="/">retornar a página inicial</Link>
                <hr />

                <div className='form'>
                    <input type='text' placeholder='E-mail' onChange={ (e) => this.setState({email: e.target.value}) } />
                    <input type='password' placeholder='Senha' onChange={ (e) => this.setState({senha: e.target.value}) } />
                    <input type='text' placeholder='Nome' onChange={ (e) => this.setState({nome: e.target.value}) } />
                    <input type='text' placeholder='Sobrenome' onChange={ (e) => this.setState({sobrenome: e.target.value}) } />
                    <input type='date' placeholder='Sobrenome' onChange={ (e) => this.setState({nascimento: e.target.value}) } />
                    <button onClick={this.submit}>Salvar</button>
                </div>
            </div>
        )
    }
}

export default Cadastro;
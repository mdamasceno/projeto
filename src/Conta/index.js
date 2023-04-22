import React, { Component } from 'react';
import firebase from 'firebase';

class Conta extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            nascimento: "",
        }
    }

    async componentDidMount(){
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user){
                let uid = user.uid;

                firebase.firestore().collection('usuario').doc(uid).get().then((result)=>{
                    this.setState({
                        nome: result.data().nome,
                        sobrenome: result.data().sobrenome,
                        nascimento: result.data().nascimento,
                    });
                })

            }else{
                window.location.href = "./login";
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Minha Conta</h1>
                <hr/>
                <b>Nome:</b> {this.state.nome} <br/>
                <b>Sobrenome:</b> {this.state.sobrenome} <br/>
                <b>Data de nascimento:</b> {this.state.nascimento} <br/>
            </div>
        );
    }
}

export default Conta;
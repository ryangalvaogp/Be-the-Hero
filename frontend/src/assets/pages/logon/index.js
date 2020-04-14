import React, {useState} from 'react';
import {  FiLogIn } from 'react-icons/fi'
import '../logon/styles.css'
import {Link, useHistory} from 'react-router-dom'
import api from '../../../services/api';

import heroes from '../../../assets/heroes.png'
import logo from '../../../assets/logo.svg'

export default function Logon(){
    const[id, setID]= useState('');
    const history= useHistory();

    async function handleLogin (e){
        e.preventDefault();
        
        try{
            const response = await api.post('session', { id })
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profiles')
        } catch(err){
            alert('Falha no Login, Tente Novamente')
        }
    }

    return(

        <div className="logon-container">
            <section className="form">
               
               <form onSubmit={handleLogin}>
               <h1>Faça Seu Logon</h1>

                    <input placeholder="Sua ID"
                            value={id}
                            onChange={ e => setID(e.target.value)}
                    ></input>
                    <button className="button" type="submit"> Entrar</button>

               </form>
               
                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#e02041"/>
                    Não tenho Cadastro</Link>   

            </section>
            <img src={heroes}alt="heroes"></img>
            <img src={logo} alt="Be the Hero"></img>
        </div>   

    )
};

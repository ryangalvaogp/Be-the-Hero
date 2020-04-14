import React, { useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {  FiArrowLeft } from 'react-icons/fi'
import logo from '../../../assets/logo.svg'
import '../Register/styles.css'
import api from '../../../services/api'



export default function Register(){
    const [Name, setName]= useState('');
    const [Email, setEmail]= useState('');
    const [Whatsapp, setWhatsapp]= useState('');
    const [City, setCity]= useState('');
    const [UF, setUf]= useState('');
    
    const history=useHistory();
    
   async function handleRegister(e){
        e.preventDefault();
        
        
        

      console.log({Name, Email, Whatsapp, City, UF})
        let data = {
            Name,
            Email,
            Whatsapp,
            City,
            UF
        
        }
     
        try{
              const response = await api.post('ongs', data);
                alert (`seu id de acesso: ${response.data.id} e ${response.data.Name}`)
                history.push('/');
            }  catch(err){
                        alert("erro no cadastro")

            } 
    }
    return (
        <div className="register-container">
           <div className="content">
                <section>
                    <img src={logo} alt="Be the Hero"/>
                    
                    <h1>Cadastro</h1>
                    <p>Faça Seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/> 
                        Fazer Login
                    </Link>   
            

                 </section>
            <form onSubmit={handleRegister}>
                <input
                 placeholder="Nome da ONG" 
                 value={Name}
                 onChange={e => setName(e.target.value)
                 }
                 />
                
                <input type="email" placeholder="E-mail"
                value={Email}
                onChange={e => setEmail(e.target.value)
                }/>
                
                <input placeholder="WhatsApp"value={Whatsapp}
                 onChange={e => setWhatsapp(e.target.value)
                 }
                 />

                <div className="input-group">
                    <input placeholder="Cidade" value={City}
                 onChange={e => setCity(e.target.value)
                 }
                 />
                    <input placeholder="UF" style={{width:80}} 
                    value={UF}
                    onChange={e => setUf(e.target.value)
                    }/>
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
        
    </div>

        
        
    );
}
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {  FiArrowLeft } from 'react-icons/fi'
import logo from '../../../assets/logo.svg'
import '../NewIncidents/styles.css'
import api from '../../../services/api'

//import heroes from '../../../assets/heroes.png'


export default function NewIncidents(){
    
    const ongId = localStorage.getItem('ongId');
    //const ongName = localStorage.getItem('ongName');


    const [titulo, setTitulo]= useState('');
    const [descricao, setDescricao]= useState('');
    const [valor, setValor]= useState('');
    const history = useHistory();
    
    async function handleNewIncidents(e){
        e.preventDefault();

        const data = {
            titulo,
            descricao,
            valor,
        }

        try {
            await api.post('incidents', data, {
                headers: { Authorization: ongId,
                }
            })
       
       history.push('/profiles')
        }catch (err){
alert('Erro no Cadastro de um novo caso.')
        }
    }
    
    
    return (
        
        <div className="newincidents-container">
           <div className="content">
                <section>
                    <img src={logo} alt="Be the Hero"/>
                    
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver.</p>

                    <Link className="back-link" to="/profiles">
                        <FiArrowLeft size={16} color="#e02041"/> 
                        Voltar para Home!
                    </Link>   
            

                 </section>
            <form>
                <div>
                <input value={titulo}
                onChange={e=>setTitulo(e.target.value)}
                placeholder="Título do caso" />
                
                <textarea  value={descricao}
                onChange={e=>setDescricao(e.target.value)}
                placeholder="Descrição"/>
                
                <input value={valor}
                onChange={e=>setValor(e.target.value)}
                placeholder="Valor em R$"/>

                </div>
                <button onClick={handleNewIncidents} className="button" type="submit">Cadastrar</button>
            </form>
        </div>
        
    </div>

    )
}
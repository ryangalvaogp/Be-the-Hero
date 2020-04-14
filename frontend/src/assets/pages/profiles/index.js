import React, { useState, useEffect } from 'react';
import {  FiPower } from 'react-icons/fi'
import { FiTrash2} from 'react-icons/fi'
import '../../pages/profiles/styles.css'
import {Link, useHistory} from 'react-router-dom'
import api from '../../../services/api'
//import heroes from '../../../assets/heroes.png'
import Logo from '../../../assets/logo.svg'

export default function Profiles(){

    const [incidents, setIncidents] = useState ([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');


    useEffect(() => {
        api.get('profile', { headers: 
                                    {   
                                        Authorization: ongId,
                                    }
                            }
                ).then(response => {
                                        setIncidents(response.data)
                                    }
                       )
    },[ongId]);

    async function handleDeleteIncident (id){
        try{
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incidents => incidents.id != id));

        }catch(err){
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/')

    }
    return(
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Be The Hero"/>
                <span>Bem Vindo, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
              
                <ul >
                  {incidents.map(incidents =>(
                        <li key={incidents.id}>
                       
                        <strong>CASO:</strong>
                        <p>{incidents.Titulo}</p>

                        <strong>DESCRIÇÃO</strong>    
                        <p>{incidents.Descricao} </p>

                        <strong>VALOR:</strong>
                  <p>{Intl.NumberFormat('pt-BR',{ style:'currency', currency:'BRL'}).format(incidents.Valor)}</p>
                        <button onClick={() => handleDeleteIncident(incidents.id)} type="button">
                            <FiTrash2 size={20} color="#A8A8B3"/>

                            
                        </button>
                    </li>
))}
                </ul>
        </div>

    )
};
   
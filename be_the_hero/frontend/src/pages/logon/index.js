import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import './styles.css';
import { Link, useHistory } from 'react-router-dom';

import heroesImg from '../../assets/heroes.png';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api'


export default function Logon(){
    const [id,setId]= useState('');
    const history=useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('session', { id });
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');
        }catch(err){
            alert('Falha no login')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src= {logoImg} alt="bee the hero"/>

                <form onSubmit={handleLogin}>
                    <h1>faça seu logon</h1>
                    <input 
                        placeholder ="sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="Back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        não tenho cadastro
                    </Link>
                </form>
            </section>  

            <img src={heroesImg} alt="Heroes" />
        </div>
    
   );
}
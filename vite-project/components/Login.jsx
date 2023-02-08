import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'bootstrap-react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const {signup, login} = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/')
        } catch {
            setError('Echec de la connexion.')
        }

        setLoading(false);

    }

    return (
        <div className=' form-container'>
            <h1 className='display-1 mb-4'>Se connecter</h1>
            {error && <Alert variant='danger'>{error}</Alert>}            
            <div className="form-group w-25">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className='form-label'>Email : </label>
                    <input type="email" className='form-control' id="email" placeholder='Entrer votre email' ref={emailRef} required/>
                    <br />
                    <label htmlFor="password" className='form-label'>Mot de passe : </label>
                    <input type="password" className='form-control' id="password" placeholder='Entrer votre mot de passe' ref={passwordRef} minLength={6} required/>

                    <button disabled={loading} type="submit" className='btn btn-primary mt-2'>Se connecter</button>
                    <p>Aucun compte ? <Link to={'/signup'}>Crée un compte</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login
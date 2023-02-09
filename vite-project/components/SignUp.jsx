import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'bootstrap-react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const {signup} = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('Les mots de passe ne correspondent pas')
        }

        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate('/')
        } catch {
            setError('Echec de la création du compte. Vérifier que vous avez pas deja un compte.')
        }

        setLoading(false);

    }

    return (
        <div className=' form-container'>
            <h1 className='display-1 mb-4'>Creation de compte</h1>
            {error && <Alert color='danger'>{error}</Alert>}  
            <div className="form-group w-25">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className='form-label'>Email : </label>
                    <input type="email" className='form-control' id="email" placeholder='Entrer votre email' ref={emailRef} required/>
                    <br />
                    <label htmlFor="password" className='form-label'>Mot de passe : </label>
                    <input type="password" className='form-control' id="password" placeholder='Entrer votre mot de passe' ref={passwordRef} minLength={6} required/>

                    <label htmlFor="confirmPass" className='form-label'>Confirmation du mot de passe : </label>
                    <input type="password" className='form-control' id="confirmPass" placeholder='Confirmer le mot de passe' ref={confirmPasswordRef} required/>

                    <button disabled={loading} type="submit" className='btn btn-primary mt-2'>Créer un compte</button>
                    <p>Vous avez deja un compte ? <Link to={'/login'}>Se connecter</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp
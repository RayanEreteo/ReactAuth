import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'bootstrap-react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const emailRef = useRef();

    const {resetPassword} = useAuth();

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Mail de récupération envoyée.")
        } catch {
            setError("Impossible d'envoyer un email de récupération.")
        }
        setLoading(false);

    }

    return (
        <div className=' form-container'>
            <h1 className='display-1 mb-4'>Réinitialisation du mot de passe</h1>
            {error && <Alert color='danger'>{error}</Alert>}
            {message && <Alert color='success'>{message}</Alert>}              
            <div className="form-group w-25">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className='form-label'>Email : </label>
                    <input type="email" className='form-control' id="email" placeholder='Entrer votre email' ref={emailRef} required/>

                    <button disabled={loading} type="submit" className='btn btn-primary mt-2'>Réinitialiser le mot de passe</button>
                    <br />
                    <br />
                    <Link to={'/login'}>Se connecter ?</Link>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
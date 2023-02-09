import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'bootstrap-react';
import { Link, useNavigate } from 'react-router-dom';

function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const {currentUser , changeEmail, changePassword} = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()

        setError('');
        setLoading(true);

        const promises = [];
        if(emailRef.current.value != currentUser.email){
            promises.push(changeEmail(emailRef.current.value))
        }

        if(passwordRef.current.value){
            promises.push(changePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            navigate('/')
        }).catch(() => {
            setError('Impossible de mettre a jour le profil')
        }).finally(() => {
            setLoading(false);
        })

    }

    return (
        <div className=' form-container'>
            <h1 className='display-1 mb-4'>Modification du profile</h1>
            {error && <Alert color='danger'>{error}</Alert>}  
            <div className="form-group w-25">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className='form-label'>Nouvelle Email : </label>
                    <input type="email" className='form-control' id="email" placeholder='Entrer la nouvelle adresse mail' ref={emailRef} required defaultValue={currentUser.email}/>
                    <br />
                    <label htmlFor="password" className='form-label'>Nouveau Mot de passe : </label>
                    <input type="password" className='form-control' id="password" placeholder='Laisser blanc si vous ne voulez pas modifier' ref={passwordRef} minLength={6}/>

                    <button disabled={loading} type="submit" className='btn btn-primary mt-2'>Modifier le profil</button>
                    <br />
                    <br />
                    <p><Link to={'/'}>Annuler</Link></p>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile
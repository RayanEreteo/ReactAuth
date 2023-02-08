import { Alert } from 'bootstrap';
import React from 'react'
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
    const [error, setError] = useState("");
    const {currentUser} = useAuth();

    function handleLogout(){}

    return (
        <>
            <div className="container text-center">
                <div className='main'>
                    <h2 className='display-2'>Profile</h2>
                    {error && <Alert variant="Danger">{error}</Alert>}
                    <p className='display-5'><strong>Email :</strong> {currentUser.email}</p>
                </div>
                <div>
                    <button className='btn btn-danger' onClick={handleLogout}>Se déconnecter</button>
                </div>
            </div>
        </>
    );
}

export default Dashboard
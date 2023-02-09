import { Alert } from 'bootstrap';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'

function Dashboard() {
    const [error, setError] = useState("");
    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();

    async function handleLogout(){
        setError('');

        try{
            await logout()
            navigate('/login')
        } catch {
            setError('Impossible de se déconnecter');
        }
    }

    return (
        <>
            <div className="container text-center">
                <div className='main'>
                    <h2 className='display-2'>Profile</h2>
                    {error && <Alert variant="Danger">{error}</Alert>}
                    <p className='display-5'><strong>Email :</strong> {currentUser.email}</p>
                    <Link to={'/update-profile'} className="btn btn-primary">Mettre a jour le profile</Link>
                </div>
                <div>
                    <button className='btn btn-danger' onClick={handleLogout}>Se déconnecter</button>
                </div>
            </div>
        </>
    );
}

export default Dashboard
import React, { useContext, useEffect } from 'react'
import { useState, createContext } from 'react'
import { auth } from '../base'
import { updateEmail, updatePassword } from 'firebase/auth'

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut();
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function changeEmail(email){
        return updateEmail(currentUser, email);
    }

    function changePassword(password){
        return updatePassword(currentUser, password);
    }



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])  

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        changeEmail,
        changePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext
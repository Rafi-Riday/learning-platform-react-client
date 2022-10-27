import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import firebaseApp from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(firebaseApp);

const UseContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleAuthProvider = new GoogleAuthProvider();
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    };
    const githubAuthProvider = new GithubAuthProvider();
    const signInGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubAuthProvider);
    };
    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
    };
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ loading, setLoading, user, setUser, createUser, signInUser, signInGoogle, signInGithub, updateUser, signOutUser, }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;
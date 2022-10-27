import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import firebaseApp from '../firebase/firebase.config';

// auth context
export const AuthContext = createContext();
// navbar context
export const NavBarOpenContext = createContext({});

const auth = getAuth(firebaseApp);

const UseContext = ({ children }) => {
    // auth context provider
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

    // navbar context
    // NavBar scrolling effect
    const [navBarY, setNavBarY] = useState('top-0');


    return (
        <NavBarOpenContext.Provider value={{ navBarY, setNavBarY }}>
            <AuthContext.Provider value={{ loading, setLoading, user, setUser, createUser, signInUser, signInGoogle, signInGithub, updateUser, signOutUser, }}>
                {children}
            </AuthContext.Provider>
        </NavBarOpenContext.Provider>
    );
};

export default UseContext;
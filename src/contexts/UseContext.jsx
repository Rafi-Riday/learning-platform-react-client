import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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
    const verificationEmailUser = () => {
        return sendEmailVerification(auth.currentUser);
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
    const resetPass = (email) => {
        return sendPasswordResetEmail(auth, email);
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

    // NavBar scrolling effect
    const [navBarY, setNavBarY] = useState('top-0');
    // theme
    const themeDataFromLS = localStorage.getItem('themeData');
    const [darkTheme, setDarkTheme] = useState(false);
    const [extraThemeVar, setExtraThemeVar] = useState(false);
    useEffect(() => {
        if (JSON.parse(themeDataFromLS)) {
            setDarkTheme(JSON.parse(themeDataFromLS));
            setExtraThemeVar(JSON.parse(themeDataFromLS));
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('themeData', JSON.stringify(darkTheme));
    }, [darkTheme]);
    const mainHTML = document.getElementById('main-html');
    darkTheme ? mainHTML.setAttribute('data-theme', 'dracula') : mainHTML.setAttribute('data-theme', 'pastel');

    return (
        <NavBarOpenContext.Provider value={{ navBarY, setNavBarY, darkTheme, setDarkTheme, extraThemeVar, }}>
            <AuthContext.Provider value={{ loading, setLoading, user, setUser, createUser, signInUser, verificationEmailUser, signInGoogle, signInGithub, updateUser, signOutUser, resetPass, }}>
                {children}
            </AuthContext.Provider>
        </NavBarOpenContext.Provider>
    );
};

export default UseContext;
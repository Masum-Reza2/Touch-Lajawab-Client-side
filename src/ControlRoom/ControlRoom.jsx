import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../ConfigFiles/firebase.config";

export const GlobalContext = createContext();

const ControlRoom = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // google and github login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const gitHubProvider = new GithubAuthProvider();
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider);
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('current user is', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const globalInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        gitHubLogin,
        logOutUser,
        updateUserProfile,
    }
    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

ControlRoom.propTypes = {
    children: PropTypes.node,

}
export default ControlRoom
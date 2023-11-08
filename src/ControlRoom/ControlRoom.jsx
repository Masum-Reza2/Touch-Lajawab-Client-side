import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../ConfigFiles/firebase.config";
import useSecureAxios from "../Hooks/useSecureAxios";

export const GlobalContext = createContext();

const ControlRoom = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const secureAxios = useSecureAxios();

    const [mode, setMode] = useState(false);
    const handleMode = () => {
        setMode(!mode);
    }

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

            // set and clear token from cookie while user login and logout
            const jwtUser = { email: currentUser?.email || user?.email }

            if (currentUser) {
                secureAxios.post('/jwt', jwtUser)
                    .then(result => {
                        // console.log(result.data)
                    })
                    .catch(error => {
                        // console.log(error.message)
                    })
            }
            else {
                secureAxios.post('/logout', jwtUser)
                    .then(result => {
                        // console.log(result.data)
                    })
                    .catch(error => {
                        // console.log(error.message)
                    })
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const globalInfo = {
        user,
        loading,
        setLoading,
        createUser,
        loginUser,
        googleLogin,
        gitHubLogin,
        logOutUser,
        updateUserProfile,
        mode,
        handleMode
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
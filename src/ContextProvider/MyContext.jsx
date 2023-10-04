import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firbase/firbase.config";

export const AuthContext = createContext(null)

const MyContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const userSignIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // get current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            // console.log('Observe current user', currentuser)
            setLoading(false)
        })
        return(() => {
            unSubscribe()
        })
    },[])

    const info ={
        user,
        loading,
        creatUser,
        userSignIn,
        userSignOut
    }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};
MyContext.propTypes = {
    children: PropTypes.node
}

export default MyContext;
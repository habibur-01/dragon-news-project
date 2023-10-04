import { useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../../ContextProvider/MyContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return (<span className="loading loading-spinner text-error"></span>)
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
        
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;
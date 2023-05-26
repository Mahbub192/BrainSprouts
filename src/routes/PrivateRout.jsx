/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import loadingfild from '../assets/99274-loading.json'
import Lottie from "lottie-react";

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Lottie className="h-[calc(100vh-200px)]" animationData={loadingfild} loop={true} />
    }
    if(user?.email){
        return children
    }
    return (
        <Navigate to={`/login`} state={{from:location}} replace></Navigate>
    );
};

export default PrivateRout;
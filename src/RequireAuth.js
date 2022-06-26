import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const RequireAuth = ({children}) => {
    const {token} = useSelector((state) =>  state.timeline)
    console.log(token);
  return token? children : <Navigate to='/login'/>
}


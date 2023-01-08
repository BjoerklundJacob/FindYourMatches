import React, { FC, ReactElement, useEffect } from "react"
import useAuth from "./useAuth"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

type IAuthenticatedRouteProps = {
    children: ReactElement
}

const AuthenticatedRoute: FC<IAuthenticatedRouteProps> = (props) => {
    const { user } = useAuth()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!user)
            toast.error('You are not allowed to do this!')
    })

    return props.children
}

export default AuthenticatedRoute
import axios from "axios";
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import { useNavigate, useLocation } from "react-router-dom";
import IAuthContext from "./interfaces/IAuthContext";
import IUser from "./interfaces/IUser";

const AuthContext = createContext<IAuthContext>(
    {} as IAuthContext
)

export function AuthProvider({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    const [user, setUser] = useState<IUser>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (error) setError(null);
    }, [location.pathname]);

    useEffect(() => {
        axios.post<IUser>('api/User/CheckSession', { id: localStorage.getItem('sessionId') })
            .then((user) => setUser(user.data))
            .catch((_error) => { })
            .finally(() => setLoadingInitial(false));
    }, []);

    function login(name: string) {
        setLoading(true);
        axios.post<IUser>('api/User/Login', { name })
            .then((res) => {
                let user = res.data;
                setUser(user);
                SetSessionId(user)
                navigate("/")
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }
    function SetSessionId(user: IUser) {
        axios.post<string>('api/User/GetSessionId', user)
            .then((res) => {
                localStorage.setItem('sessionId', res.data)
                navigate("/")
            })
    }
    function signUp(name: string) {
        setLoading(true);
        axios.post<IUser>('api/User/SignUp', { name })
            .then((res) => {
                let user = res.data;
                setUser(user)
                SetSessionId(user)
                navigate("/")
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }

    function logout() {
        console.log(user)
        axios.post('api/User/Logout', { name: user?.name }).then(() => setUser(undefined));
        localStorage.removeItem('sessionId')
    }

    const memoedValue = useMemo(
        () => ({
            user,
            loading,
            error,
            login,
            signUp,
            logout,
        }),
        [user, loading, error]
    );

    return (
        <AuthContext.Provider value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}
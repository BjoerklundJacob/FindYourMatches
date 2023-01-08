import IUser from "./IUser";

export default interface IAuthContext {
    user?: IUser;
    loading: boolean;
    error?: any;
    login: (name: string) => void;
    signUp: (name: string) => void;
    logout: () => void;
}
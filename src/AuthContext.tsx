import { createContext, useContext } from "react";

interface IAuthContext {
    authToken: string | null,
    setAuthToken: (token: string | null) => void
}

export const AuthContext = createContext<IAuthContext>({
    authToken: null,
    setAuthToken: (token) => console.warn("no provider set")
});
export const useAuth = () => useContext(AuthContext);
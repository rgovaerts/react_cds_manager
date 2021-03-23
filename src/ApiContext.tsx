import { createContext, useContext } from "react";

export const ApiContext = createContext<string | null>(null);
export const useApi = () => useContext(ApiContext);
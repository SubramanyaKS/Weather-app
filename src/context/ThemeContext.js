import { createContext, useState } from "react";
// import { themeReducer } from "../reducers/reducer";

export const Theme = createContext();

// const initialState = {dark:false};

export const ThemeProvider = ({children})=>{
    // const [state, dispatch] = useReducer(themeReducer, initialState);
    const[dark, setDark]= useState(false);
    return(
        <Theme.Provider value={{dark,setDark}}>
            {children}
        </Theme.Provider>
    );
}

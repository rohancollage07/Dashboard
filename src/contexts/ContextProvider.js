import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const inititalState = {
    chat : false,
    cart : false,
    userProfile : false,
    notification : false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(inititalState)
    const handleClick = (clicked) => {
        setIsClicked({ ...inititalState, [clicked]:true});
    }
    const [screenSize, setScreenSize] = useState(undefined)

    return(
        <StateContext.Provider 
        value={{
            activeMenu,
            setActiveMenu,
            isClicked, 
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize
             
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);









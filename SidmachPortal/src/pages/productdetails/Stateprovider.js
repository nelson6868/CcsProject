import React, { createContext, useContext, useReducer } from 'react'
//PREPARINFG THE DATA LAYER
export const StateContext = createContext();
//wrap our components
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}

    </StateContext.Provider>
)
//use it inside of a component
export const useStateValue = () => useContext(StateContext)


import React, { useContext, useState } from "react";

export const applicationContext=React.createContext()

export default  function Settings(props) {
const [completedListFlag,setCompletedListFlag]=useState(false)
const [HidecompletedListFlag,setHidecompletedListFlag]=useState(false)
const [NumberOfItemsToDisplay,setNumberOfItemsToDisplay]=useState(2)
const [sortFactor,setSortFactor]=useState('Depend On Difficulty')


const state={
    completedListFlag,
    NumberOfItemsToDisplay,
    sortFactor,
    HidecompletedListFlag,

    setHidecompletedListFlag,
    setCompletedListFlag,
    setNumberOfItemsToDisplay,
    setSortFactor,
   

}

 



    return(
        <>
        <applicationContext.Provider value={state}>
            {props.children}
        </applicationContext.Provider>
        
        </>
    )
    
}

import React, { useContext, useEffect, useState } from "react";


export const applicationContext=React.createContext()


export default  function Settings(props) {
const [completedListFlag,setCompletedListFlag]=useState()
const [HidecompletedListFlag,setHidecompletedListFlag]=useState(false)
const [NumberOfItemsToDisplay,setNumberOfItemsToDisplay]=useState(3)
const [sortFactor,setSortFactor]=useState('Depend On Difficulty')

useEffect(()=>{
    const gettingData= JSON.parse(localStorage.getItem('flag'))
    console.log('gettingData',gettingData);
    
    setCompletedListFlag(gettingData==='true')
    console.log('completedListFlag',completedListFlag);

    const gettingData2= JSON.parse(localStorage.getItem('perScreen'))
    console.log('gettingData2',gettingData2);
    
    setNumberOfItemsToDisplay(parseInt(gettingData2) )
   
 
    console.log("NumberOfItemsToDisplay",NumberOfItemsToDisplay);
    
 
 
 },[completedListFlag,NumberOfItemsToDisplay])


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
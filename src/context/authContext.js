'use strict'

import react, { useState,useEffect } from "react"
export const authContext=react.createContext();
import superagent from 'superagent'
import base64 from 'base-64'
import jwt from 'jsonwebtoken'
import cookie from 'react-cookies'




export default function Auth(props) {
    const [loginFlag,setloginFlag]=useState()
    const [user,setUser]=useState({
        username:'',
        capabilities:[]
    })
    user.capabilities=['read','create','update']
    // user.capabilities=['read','create']
    // user.capabilities=['create']
    // user.capabilities=['read']


    const loginHandeler=async(username,password)=>{

        // const url='https://to-do-haroun.herokuapp.com';

        const response = await superagent.post(`${url}/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);

        validate(response.body.token)

    }


    const logoutHandeler=()=>{
        setloginFlag(false);
        setUser({})
        cookie.remove('token');


    }

    const validate=(token)=>{
        if (token) {
            setloginFlag(true);
            const user= jwt.decode(token)
            setUser(user)
           cookie.save('token',token)

            
        }else{
            setloginFlag(false)
            setUser({})
        }

    }

    useEffect(() => {
        // check the token
        const myTokenCookie = cookie.load('token');
        validate(myTokenCookie);
    }, []);

    const can = (capability) => {
        // chaining
        //optional chaining
        return user?.capabilities?.includes(capability);
    }



    const state ={
        loginFlag:loginFlag,
        loginHandeler: loginHandeler,
        logoutHandeler: logoutHandeler,
        can:can

    }



    return (
        <>
          < authContext.Provider value={state}>
                {props.children}
            </authContext.Provider>
        
        </>
    )
    
}
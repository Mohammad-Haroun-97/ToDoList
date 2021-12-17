'use strict'

import react, { useState,useEffect } from "react"
export const authContext=react.createContext();
import superagent from 'superagent'
import base64 from 'base-64'
import jwt from 'jsonwebtoken'
import cookie from 'react-cookies'





export default function Auth(props) {
    const [loginFlag,setloginFlag]=useState()
    const [abilitiy,setAbility]=useState([])
    const [user,setUser]=useState({
        username:'',
        capabilities:[]
    })

    // user.capabilities=['read','create','update']
    // user.capabilities=['read','create']
    // user.capabilities=['create']
    // user.capabilities=['read']


    const loginHandeler=async(username,password)=>{

        const url='';
        console.log('response------------------');
        const response = await superagent.post(`https://finalto-do.herokuapp.com/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);

        // setAbility(response.body.user.capabilities)
        // console.log('abilitiy',abilitiy);
        // console.log('response.body.user',response.body.user.capabilities);

        // console.log('000000000000000',response.body.user);

        validate(response.body.token)

    }


    const logoutHandeler=()=>{
        setloginFlag(false);
        setUser({})
        cookie.remove('token');


    }

    const validate=async(token)=>{
        if (token) {

            const validation = await superagent.post(`https://finalto-do.herokuapp.com/signin2`).set('authorization', `Bearer ${token}`)
            // console.log('validationvalidation',validation.body.user);
            setloginFlag(true);
            const user1= jwt.decode(token)
            // console.log('user1',user1);
            setUser(validation.body.user)
            // console.log('useruseruser',user);
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
        // console.log('user.capabilities+++++++++++++',user.token);
        return user?.capabilities?.includes(capability);
    }
    



    const state ={
        loginFlag:loginFlag,
        user:user,
        loginHandeler: loginHandeler,
        logoutHandeler: logoutHandeler,
        setUser:setUser,
        
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
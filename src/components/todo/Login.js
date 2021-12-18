"use strict";

import react, { useState, useContext } from "react";
import {authContext} from "../../context/authContext";
import {When} from 'react-if'
import {Form,Input,Button, Container} from 'react-bootstrap'

export default function Login() {
  const auth = useContext(authContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function submitHandeler(e) {
    e.preventDefault();

    

    auth.loginHandeler(user.username,user.password)
    setTimeout(() => {
        location.reload()
    }, 3000);
    
   
    
    //   console.log('user',user);
   
      
  }



  function changeHandeler(e) {
    e.preventDefault();

    
        setUser({ ...user, [e.target.name]: e.target.value });

    // console.log('user',user);
  }

  return (
    <>
    <When condition={auth.loginFlag==false}>
        <Container>
            <h5>Sign in : </h5>
      <Form onSubmit={submitHandeler}>
        <Form.Label> Username</Form.Label>

        <input data-testid="username-input" type="text" name="username" onChange={changeHandeler} />
        <Form.Label> Password</Form.Label>
        <input type="password" name="password" onChange={changeHandeler} />
        <Button type="submit">Submit</Button>
      </Form>
      </Container>
      </When>

      <When condition={auth.loginFlag==true}>
          <button onClick={auth.logoutHandeler}>LogOut</button>
    </When>
    </>
  );
}

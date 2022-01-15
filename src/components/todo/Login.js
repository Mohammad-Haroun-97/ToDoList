"use strict";

import react, { useState, useContext } from "react";
import { authContext } from "../../context/authContext";
import { When } from "react-if";
import { Form, Input, Container,Modal ,Button} from "react-bootstrap";


import {
  Alignment,

  
  
  Navbar,
  NavbarDivider,
  NavbarGroup,

} from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';

export default function Login() {
  const auth = useContext(authContext);


  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function submitHandeler(e) {
    e.preventDefault();

    auth.loginHandeler(user.username, user.password);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }

  function changeHandeler(e) {
    e.preventDefault();

    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
    <Navbar style={{position:'fixed', top:'0',backgroundColor:'#FFEEAD',height:'7vh'}}> 
    <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>
          <When condition={auth.loginFlag == false}>
        <Container style={{position:'fixed',top:".8vw",width:"40vw" }}>
          
          <Form style={{display:'inline-block',width:"40vw",marginLeft:'5vw'}} onSubmit={submitHandeler}>
            <Form.Label style={{fontFamily: 'Lobster',fontSize:'1em',fontWeight:"500" ,marginRight:".5em"}}> Username</Form.Label>

            <input style={{display:'inline-block',width:"25%",marginRight:"1vw"}}
              data-testid="username-input"
              type="text"
              name="username"
              onChange={changeHandeler}
            />
            <Form.Label style={{fontFamily: 'Lobster',fontSize:'1em',fontWeight:"500" ,marginRight:".5em"}}>  Password</Form.Label>
            <input style={{display:'inline-block',width:"25%" ,marginRight:"1vw"}} 
            type="password" name="password" onChange={changeHandeler} />
            <Button variant="dark" style={{position:'fixed',top:'.4vw',left:'40vw'}} type="submit">Log In</Button>
          </Form>
        </Container>
      </When>

      <When condition={auth.loginFlag == true}>
        <Button variant="dark" style={{position:'fixed',top:'.4vw',left:'15vw'}} onClick={auth.logoutHandeler}>LogOut</Button>
   
      </When>
      
      </Navbar.Heading>
        
     
      
    </Navbar.Group>
</Navbar>


    </>
  );
}

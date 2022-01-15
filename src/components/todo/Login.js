"use strict";

import react, { useState, useContext } from "react";
import { authContext } from "../../context/authContext";
import { When } from "react-if";
import { Form, Input, Container } from "react-bootstrap";


import {
  Alignment,

  Button,
  
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
    <Navbar style={{position:'fixed', top:'0',backgroundColor:'#FFEEAD'}}> 
    <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading><When condition={auth.loginFlag == false}>
        <Container style={{position:'fixed',top:"1vw",width:"40vw" }}>
          
          <Form style={{display:'inline-block',width:"40vw"}} onSubmit={submitHandeler}>
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
            <Button type="submit">Log In</Button>
          </Form>
        </Container>
      </When>

      <When condition={auth.loginFlag == true}>
        <button onClick={auth.logoutHandeler}>LogOut</button>
      </When></Navbar.Heading>
        
     
        <Button style={{marginLeft:"60vw",marginRight:'1vw'}} class="bp3-button bp3-minimal"  icon="user"></Button>
      <Button style={{marginRight:'1vw'}} class="bp3-button bp3-minimal" icon="notifications"></Button>
      <Button style={{marginRight:'3vw'}} class="bp3-button bp3-minimal bp3-icon-cog"  icon="cog"></Button>
    </Navbar.Group>
</Navbar>


    
      {/* <When condition={auth.loginFlag == false}>
        <Container>
          <h5>Sign in : </h5>
          <Form onSubmit={submitHandeler}>
            <Form.Label> Username</Form.Label>

            <input
              data-testid="username-input"
              type="text"
              name="username"
              onChange={changeHandeler}
            />
            <Form.Label> Password</Form.Label>
            <input type="password" name="password" onChange={changeHandeler} />
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </When>

      <When condition={auth.loginFlag == true}>
        <button onClick={auth.logoutHandeler}>LogOut</button>
      </When> */}
    </>
  );
}

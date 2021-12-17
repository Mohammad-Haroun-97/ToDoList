import React,{ useState } from "react";
import {Form,Container,Button,} from 'react-bootstrap'
import  superagent  from "superagent";

export default function Signup() {
    const [newuser,setNewuser]=useState({})

   async function handleSubmit(e) {
    e.preventDefault()
       try {
        console.log('newusernewusernewuser',newuser);
        await superagent.post('https://finalto-do.herokuapp.com/signup',newuser)
       } catch (error) {
           console.log(error.messege);
           
       }
       
       
        
    }

    function handleChange(e) {
        e.preventDefault();
        setNewuser({...newuser,[e.target.name]:e.target.value})
    }
    

    return <>
     <Container>
         <h4>Sign Up :</h4>

<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control size="lg"  onChange={handleChange} name="username" type="text" placeholder="Enter Your Username" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handleChange} name="password" type="text" placeholder="Enter Your Password" />
  </Form.Group>
  {/* <FloatingLabel controlId="floatingSelectGrid" label="Works with selects"> */}
      {/* <Form.Select aria-label="Floating label select example"> */}
      <select name='role' onChange={handleChange}>
        <option>Choose Your Role</option>
        <option  name='role' value="admin">Admin</option>
        <option  name='role' value="editor">Editor</option>
        <option  name='role' value="writer">User</option>
        </select>
      {/* </Form.Select> */}
    {/* </FloatingLabel> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
    
    

    </>
    
}
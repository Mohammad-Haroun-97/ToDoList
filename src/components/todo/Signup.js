import React,{ useState } from "react";
import {Form,Container,Button,Card} from 'react-bootstrap'
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
    <Container style={{width:"30vw" ,display:'inline-block',float:'left',position:'fixed',left:'5vw'}}>
    
         <h4 style={{fontFamily:'Lobster' ,marginBottom:'1vw',marginLeft:'5vw'}}>Sign Up :</h4>

<Form  class="col-md-6" onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{fontFamily:'The Nautigal' ,fontSize:'3em',fontWeight:'700'}}>Username</Form.Label>
    <Form.Control size="lg"  onChange={handleChange} name="username" type="text" placeholder="Enter Your Username" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{fontFamily:'The Nautigal' ,fontSize:'3em',fontWeight:'700'}}>Password</Form.Label>
    <Form.Control onChange={handleChange} name="password" type="text" placeholder="Enter Your Password" />
  </Form.Group>

      <select name='role' onChange={handleChange}>
        <option style={{fontFamily:'cursive' ,fontSize:'1em',fontWeight:'200'}}>Choose Your Role</option>
        <option style={{fontFamily:'cursive' ,fontSize:'1em',fontWeight:'200'}}  name='role' value="admin">Admin</option>
        <option  style={{fontFamily:'cursive' ,fontSize:'1em',fontWeight:'200'}} name='role' value="editor">Editor</option>
        <option  style={{fontFamily:'cursive' ,fontSize:'1em',fontWeight:'200'}} name='role' value="writer">User</option>
        </select>

  <Button style={{marginLeft:'2vw'}} variant="dark" type="submit">
    Submit
  </Button>
</Form>
</Container>


<Container style={{width:'50vw',height:'50vh', display:'inline-block',float:'right',marginRight:'2vw' }}>

  <Card.Img style={{width:'100%',height:'100%',objectFit:'cover' ,borderRadius:'20px'}}  variant="top" src="https://www.investintech.com/resources/blog/wp-content/uploads/2018/02/To-Do-List.png" />
  <p style={{justifyContent:'center', textAlign:'center' ,fontFamily:'Lobster',fontSize:'1.5em'}}><span style={{fontFamily:'cursive' ,fontSize:'2em'}}> Free up your mental space </span><br/><br/>
Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are or what device you use).</p>
 
 {/* <Card.Text>dasdasdasdadasdad</Card.Text> */}

    
  </Container>
    </>
    
}
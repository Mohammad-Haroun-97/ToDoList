import React from "react"
import {Form,Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FormToDo(props) {

    const {handleSubmit,handleChange}=props


    return(
        <>
        <Container style={{width:'40vw',marginLeft:'1vw',display:'inline-block',float:'left',marginTop:'3vw'}}>

<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>To Do Item</Form.Label>
    <Form.Control className="overflow-wrap"  size="lg"  onChange={handleChange} name="task" type="textarea" placeholder="Item Details" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Assigned To</Form.Label>
    <Form.Control onChange={handleChange} name="name" type="text" placeholder="Assignee Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label >Difficulty</Form.Label>
    <Form.Control style={{marginLeft:'2vw',marginTop:'3vw',border:'solid-black',width:'70%'}} onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
 
  </Form.Group>
 
  <Button style={{marginTop:'3vw',marginLeft:'8vw'}} variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>

  <img style={{width:'40vw',display:'inline-block',float:'right',zIndex:'100',borderRadius:'20px',marginRight:'10vw',height:'55vh'}} src="https://media.istockphoto.com/vectors/opened-personal-organizer-with-a-to-do-list-top-view-of-women-hands-vector-id1168738399?k=20&m=1168738399&s=612x612&w=0&h=adldxggj-8azZlhHE-COXj111heThIsmZI0wI7fxdH4="/>

    
        </>
    )
    
}



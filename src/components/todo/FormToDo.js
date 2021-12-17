import React from "react"
import {Form,Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FormToDo(props) {

    const {handleSubmit,handleChange}=props


    return(
        <>
        <Container>

<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>To Do Item</Form.Label>
    <Form.Control size="lg"  onChange={handleChange} name="text" type="text" placeholder="Item Details" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Assigned To</Form.Label>
    <Form.Control onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Difficulty</Form.Label>
    <Form.Control onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
    {/* <Form.Label>Range</Form.Label> */}
  {/* <Form.Range /> */}
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
    
        </>
    )
    
}



import React from 'react' 
import { Button,Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CompletedListt(props) {

    const {completedListtt}=props

    return (
        
        <>

{completedListtt.map(item => (


<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{item.text}</Card.Title>
    <Card.Text>
    Assigned to:{item.assignee}
    </Card.Text>
    <Card.Text>
    Difficulty: {item.difficulty}
    </Card.Text>
   
    <h4>Task Completed</h4>
  </Card.Body>
</Card>


      
      ))}


      
        
        </>
    )


    
}
import React, { useEffect, useState } from 'react' 
import { Button,Card,Container,Title } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CompletedListt(props) {
  const [adjustCompletedList,setAdjustCompletedLis]=useState([])

    const {filterArray}=props

    // useEffect(()=>{
    //   setAdjustCompletedLis([...new Set(completedListtt)])

    // },[completedListtt])

    // useState([...new Set(completedListtt)])

    return (
        
        <>
    
        
        <Container>

{filterArray.map(item => (


<Card text={"white"} bg={"dark"} style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{item.task}</Card.Title>
    <Card.Text>
    Assigned to:{item.name}
    </Card.Text>
    <Card.Text>
    Difficulty: {item.difficulty}
    </Card.Text>
    
    <h4>Task Completed</h4>
  </Card.Body>
</Card>


      
      ))}
</Container>

      
        
        </>
    )


    
}
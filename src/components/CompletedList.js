import React, { useEffect, useState } from 'react' 
import { Button,Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CompletedListt(props) {
  const [adjustCompletedList,setAdjustCompletedLis]=useState([])

    const {completedListtt}=props

    useEffect(()=>{
      setAdjustCompletedLis([...new Set(completedListtt)])

    },[completedListtt])

    useState([...new Set(completedListtt)])

    return (
        
        <>

{adjustCompletedList.map(item => (


<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{item.text}</Card.Title>
    <Card.Text>
    Assigned to:{item.assignee}
    </Card.Text>
    <Card.Text>
    Difficulty: {item.difficulty}
    </Card.Text>
    <Card.Text>
    complete state: {item.complete? item.complete.toString():"false"}
    </Card.Text>
    <h4>Task Completed</h4>
  </Card.Body>
</Card>


      
      ))}


      
        
        </>
    )


    
}
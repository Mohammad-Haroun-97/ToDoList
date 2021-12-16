import react from 'react' 
import { Button,Card, Container,Row } from 'react-bootstrap'


export default function List(props) {

    const {list,toggleComplete,completedHandeler}=props

    return (
        <>
    <Container >        
{list.map(item => (
    <Row> 
   
        
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{item.text}</Card.Title>
    <Card.Text>
    Assigned to:{item.assignee}
    </Card.Text>
    <Card.Text>
    Difficulty: {item.difficulty}
    </Card.Text>
   
    <Button onClick={() =>toggleComplete(item.id)} >Complete: {item.complete.toString()}</Button>
  </Card.Body>
</Card>


</Row>



      ) )}
      </Container>
        
        </>
    )


    
}
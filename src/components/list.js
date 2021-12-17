import { Button, Card, Container, Row, Pagination ,Col} from "react-bootstrap";
import { applicationContext } from "../context/sittingsContext";
import React, { useContext, useState } from "react";
import Auth from "./todo/Auth";

export default function List(props) {
  const setting = useContext(applicationContext);
  const [number, setNumber] = useState(1);

  const { list, toggleComplete, completedHandeler } = props;

  function numberHandeler(index) {
    setNumber(index + 1);
  }

  function paginationHandeler() {
    let arrayperScreen = [];
   
if (!setting.NumberOfItemsToDisplay ) {
  setting.NumberOfItemsToDisplay=2
  
}
// setcompletedListtt([completedListtt, ...list.slice(index)])
    for (
      let index = 0;
      index < list.length / setting.NumberOfItemsToDisplay;
      index++
    ) {
      arrayperScreen.push(
        
        <div style={{display: "inline-block" , margin:'20px'}}>
        <Pagination size="lg">
        <Pagination.Item 
          onClick={() => numberHandeler(index)}
          key={index + 1}
          active={index === number - 1}
        >
          {index + 1}
        </Pagination.Item>
        </Pagination>
        
        </div>
        
       
      );
      
    }
    
    return arrayperScreen;
  }

  return (
    <>
      {paginationHandeler()}

      <Container>
      <Row  >

      

        {list
          .slice(
            (number - 1) * setting.NumberOfItemsToDisplay,
            number * setting.NumberOfItemsToDisplay
          )
          .map((item) => (
            
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{item.text}</Card.Title>
                  <Card.Text>Assigned to:{item.assignee}</Card.Text>
                  <Card.Text>Difficulty: {item.difficulty}</Card.Text>
<Auth capability='update'>
                  <Button onClick={() => toggleComplete(item.id)}>
                    Complete: {item.complete.toString()}
                  </Button>

                  </Auth>
                </Card.Body>
              </Card>
            </Col>
           
          ))}
          </Row>
      </Container>
    </>
  );
}

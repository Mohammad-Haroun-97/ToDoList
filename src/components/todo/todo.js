import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import FormToDo from './FormToDo.js';
import List from '../list.js';
import CompletedList from "../CompletedList"
import {applicationContext} from '../../context/sittingsContext'
import 'bootstrap/dist/css/bootstrap.min.css';

import { v4 as uuid } from 'uuid';
import { Button, Container,Form } from 'react-bootstrap';
import { When } from 'react-if';
import Auth from './Auth';

// localStorage.setItem('local',{})
const ToDo = () => {
  const settings=useContext(applicationContext)

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
 
  const [localShowFlag,setLocalShowFlag]=useState(false)
  const [localPerScreen,setLocalPerScreen]=useState(2)

  const [completedListtt,setcompletedListtt]=useState([])
  
 

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( (item,index) => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
        if (item.complete==true) {
          setcompletedListtt([...completedListtt,item])
          
        }if (item.complete==false){
          
          setcompletedListtt([completedListtt, ...list.slice(index)])
        
          // setcompletedListtt([...completedListtt,item])

        }
        
      }
      
      return item;
    });

    setList(items);
    
  }



   function showCompletedList() {
     
    // console.log('completedList000000000000000000',completedListtt);
    setLocalShowFlag( true)
    // settings.setCompletedListFlag(true)
    
console.log('settings.completedListFlag',settings.completedListFlag);

  let test=JSON.stringify(localShowFlag)
  localStorage.setItem('flag',test )

  }
   function HideCompleted() {
   
     setLocalShowFlag(false)
    // settings.setCompletedListFlag(false)
    
  
      let test=JSON.stringify(localShowFlag)
      localStorage.setItem('flag',test )
    
  }

 

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  function perScreenHandeler(event) {
    event.preventDefault()
    settings.setNumberOfItemsToDisplay(parseInt(event.target.itemsPerScreen.value) )
    setLocalPerScreen(parseInt(event.target.itemsPerScreen.value))

    localStorage.setItem('perScreen',JSON.stringify(event.target.itemsPerScreen.value))
  }
if (!localStorage.getItem('flag')) {
  localStorage.setItem('flag' ,JSON.stringify(false) )
  
}
  
  
  
  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <br/>
      <br/>
      <br/>
      <Container>
        

  

      <Button style={{marginLeft:'50px' ,marginRight:"30px"}} onClick={showCompletedList}>Hide Completed List</Button>
      
      <Button style={{paddingLeft:'50px' ,marginRight:"30px" }} onClick={HideCompleted}>Show Completed List</Button>
      <br/>
      <br/> 
      <Form onSubmit={perScreenHandeler}>
      <Form.Label>Number Of Items Per Screen</Form.Label>
    <Form.Control type="number" name="itemsPerScreen" id="itemsPerScreen" />
    <Button type='submit'>Enter</Button>
    </Form>
      </Container>
      <br/>
      <br/>
      
      {localStorage.getItem('flag')==='true' && < CompletedList completedListtt={completedListtt} />}

      <Auth capability="create">

      <FormToDo handleSubmit={handleSubmit} handleChange={handleChange} />

      </Auth>

      <Auth capability="read" >

      <List list={list} toggleComplete={toggleComplete}  />
      </Auth>

    </>
  );
};

export default ToDo;

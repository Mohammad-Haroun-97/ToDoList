import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import FormToDo from './FormToDo.js';
import List from '../list.js';
import CompletedList from "../CompletedList"
import {applicationContext} from '../../context/sittingsContext'
import 'bootstrap/dist/css/bootstrap.min.css';

import { v4 as uuid } from 'uuid';
import { Button, Container } from 'react-bootstrap';
import { When } from 'react-if';

const ToDo = () => {
  const settings=useContext(applicationContext)

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

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

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
        setcompletedListtt([...completedListtt,item])
      }
      
      return item;
    });

    setList(items);
    
  }

  // function completedHandeler(item) {
  //     return setcompletedListtt([...completedListtt,item])
  // }

  function showCompletedList() {

    console.log('completedList000000000000000000',completedListtt);
    
    settings.setCompletedListFlag(true)
    


console.log('settings.completedListFlag',settings.completedListFlag);

    
  }
  function HideCompleted() {
    settings.setCompletedListFlag(false)
  }

 

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);


  
  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <br/>
      <br/>
      <br/>
      <Container>
      <Button style={{marginLeft:'50px' ,marginRight:"30px"}} onClick={showCompletedList}>Show Completed List</Button>
      
      <Button style={{paddingLeft:'50px' ,marginRight:"30px" }} onClick={HideCompleted}>Hide Completed List</Button>
      </Container>
      <br/>
      <br/>
      
      {settings.completedListFlag && < CompletedList completedListtt={completedListtt} />}

      <FormToDo handleSubmit={handleSubmit} handleChange={handleChange} />

      <List list={list} toggleComplete={toggleComplete}  />

      {/* <When condition={settings.completedListFlag==true}> */}
     
      
      {/* </When> */}

      

      
      

    </>
  );
};

export default ToDo;

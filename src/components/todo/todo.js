import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import FormToDo from './FormToDo.js';
import List from '../list.js';
import CompletedList from "../CompletedList"
import {applicationContext} from '../../context/sittingsContext'
import {authContext} from '../../context/authContext'
import 'bootstrap/dist/css/bootstrap.min.css';

import { v4 as uuid } from 'uuid';
import { Button, Container,Form } from 'react-bootstrap';
import { When } from 'react-if';
import Auth from './Auth';
import { saveCookies } from 'superagent';
import cookie from 'react-cookies'
import Signup from './Signup.js';


// localStorage.setItem('local',{})
const ToDo = () => {

  // useEffect(()=>{
  //   setTimeout(() => {
  //     // location.reload()
      
  //   }, 90000);

  // })


  const settings=useContext(applicationContext)
  const auth=useContext(authContext)

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
 
  const [localShowFlag,setLocalShowFlag]=useState(false)
  const [localPerScreen,setLocalPerScreen]=useState(2)
  const [limit,setLimit]=useState(0)
  const [filterArray,setFilterArray]=useState([])
  const [settingFlag,setsettingFlag]=useState(false)
  const [buttonFlag,setbuttonFlag]=useState(false)

  const [completedListtt,setcompletedListtt]=useState([])
  
 

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;

    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${auth.user.token}`);
    console.log('3333333',auth.user.token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(item);
    console.log('rawrawraw',raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://finalto-do.herokuapp.com/todo/tasks", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log('uuuuuuuuuuuu',result))
      .catch((error) => console.log("error", error));

      console.log('listlistlistlist',list);

    setList([...list, item]);
  }

  function deleteItem(id) {
    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${auth.user.token}`);

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`https://finalto-do.herokuapp.com/todo/tasks/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(item,id) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${auth.user.token}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      complete: !item.complete,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`https://finalto-do.herokuapp.com/todo/tasks/${id}`,requestOptions).then((response) =>{console.log('responseresponse',response); response.json()}).then((result) => console.log(result)).catch((error) => console.log("error", error));



    const items = list.map( (item,index) => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
        
        // if (item.complete==true) {
        //   setcompletedListtt([...completedListtt,item])
          
        // }if (item.complete==false){
          
        //   setcompletedListtt([completedListtt, ...list.slice(index)])
        
          // setcompletedListtt([...completedListtt,item])

        // }
        
      }
      
      return item;
    })
    
    setList(items);
    finalCompletedList(list);
    
  }

  function finalCompletedList(list) {
  const filterArray=list.filter(item=> item.complete==true)

  setFilterArray(filterArray) 
    
  }



   function showCompletedList() {
    localStorage.setItem('flag',JSON.stringify(true))
   
    
    settings.setCompletedListFlag(localStorage.getItem('flag'))

    console.log("localStorage.getItem('flag'),",localStorage.getItem('flag'));
    console.log('settings.completedListFlag',settings.completedListFlag);
   
     
    // console.log('completedList000000000000000000',completedListtt);
    // setLocalShowFlag( true)
    // settings.setCompletedListFlag(true)
    

  // let test=JSON.stringify(localShowFlag)
  // localStorage.setItem('flag',test )

  }
   function HideCompleted() {

    localStorage.setItem('flag',JSON.stringify(false))
   
    
    settings.setCompletedListFlag(localStorage.getItem('flag'))
    console.log("localStorage.getItem('flag'),",localStorage.getItem('flag'));
    
  
     
      // localStorage.setItem('flag',JSON.stringify(false) )
    
  }

 

  useEffect(() => {

    var myHeaders = new Headers();
    // const myTokenCookie = cookie.load('token');
    myHeaders.append("Authorization", `Bearer ${cookie.load('token')}`);
    // console.log('auth.user.token*************',cookie.load('token'));
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    if (auth.loginFlag && limit < 4 ) {
      fetch("https://finalto-do.herokuapp.com/todo/tasks", requestOptions)
        .then((response) =>{return response.json()})
        .then((result) =>{ setList(result)})
        .catch((error) => console.log("error", error));
        setLimit(limit + 1);
    }


    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    
  }, [list,auth.loginFlag]);

  useEffect(()=>{


  })





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
     { auth.loginFlag && <Button onClick={()=>{setsettingFlag(true);setbuttonFlag(!buttonFlag)}}>Settings</Button>}

{! auth.loginFlag && <Signup/>}
    
    {auth.loginFlag &&
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
 

     
     

      {auth.loginFlag && buttonFlag && <Container>
        

  

      <Button style={{marginLeft:'50px' ,marginRight:"30px"}} onClick={HideCompleted}>Hide Completed List</Button>
      
      <Button style={{paddingLeft:'50px' ,marginRight:"30px" }} onClick={showCompletedList}>Show Completed List</Button>
      <br/>
      <br/> 
      <Form onSubmit={perScreenHandeler}>
      <Form.Label>Number Of Items Per Screen</Form.Label>
    <Form.Control type="number" name="itemsPerScreen" id="itemsPerScreen" />
    <Button type='submit'>Enter</Button>
    </Form>
      </Container>}
      <br/>
      <br/>
      <Auth capability="create">

      <FormToDo handleSubmit={handleSubmit} handleChange={handleChange} />

      </Auth>

      
      {settings.completedListFlag &&  < CompletedList filterArray={filterArray} />}

      

      <Auth capability="read" >

        <h2>To Do List</h2>

      <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
      </Auth>

    </>
  );
};

export default ToDo;

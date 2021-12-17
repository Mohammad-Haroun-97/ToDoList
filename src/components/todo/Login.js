"use strict";

import react, { useState, useContext } from "react";
import {authContext} from "../../context/authContext";
import {When} from 'react-if'

export default function Login() {
  const auth = useContext(authContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function submitHandeler(e) {
    e.preventDefault();

    auth.loginHandeler(user.username,user.password)
  }



  function changeHandeler(e) {
    e.preventDefault();

    setUser({
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
    <When condition={auth.loginFlag==false}>
      <form onSubmit={submitHandeler}>
        <label> Username</label>

        <input type="text" name="username" onChange={changeHandeler} />
        <label> Password</label>
        <input type="password" name="password" onChange={changeHandeler} />
        <button type="submit">Submit</button>
      </form>
      </When>

      <When condition={auth.loginFlag==true}>
          <button onClick={auth.logoutHandeler}>LogOut</button>
    </When>
    </>
  );
}

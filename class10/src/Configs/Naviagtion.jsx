import React from "react";
import { Routes , Route } from "react-router-dom";
import Login from "../Components/Login";
import Home from "../Components/Home";
import LoginForm from "../Components/LoginForm";


class Navigation extends React.Component{
   render(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}>
        
            </Route>
            <Route path="/Home" element={<Home/>}>
        
            </Route>
            <Route path="/LoginForm" element={<LoginForm/>}>
        
            </Route>
        </Routes>
            )
   }

   }
export default Navigation 
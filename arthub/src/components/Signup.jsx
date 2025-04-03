import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";

function Signup(){
    const[username, setusername] = useState('');
    const[password, setupassword] = useState('');
    
    const handleApi= ()=>{
        console.log({username, password});
    }
    return  <div>
        <Header></Header>
        Welcome to signup page ..... 
        <br></br>
        USERNAME :
        <input type="text" placeholder="Input your username" value={username}
        onChange={(e)=>{
            setusername(e.target.value);
        }}/>
        <br></br>
        PASSWORD  :
        <input type="password" placeholder="Password" value={password}
        onChange={(e)=>{
            setupassword(e.target.value);
        }}/>
        <br></br>
        <button onClick={handleApi}>SIGNUP</button>
        <Link to="/login">LOGIN</Link>

    </div>
}
export default  Signup;
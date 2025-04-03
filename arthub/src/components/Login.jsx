import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";

function Login(){
    const[username, setusername] = useState('');
    const[password, setupassword] = useState('');

    const handleApi=()=>{
        console.log({username,password});
        username : username ; 
        password : password ; 

        
    }


        
    return  <div>
        <Header></Header>
        Welcome to login page..... 
        <br></br>
        USERNAME :
        <input type="text" placeholder="abc123@gmail.com" value={username}
        onChange={(e)=>{
            setusername(e.target.value);
        }}></input>
        <br></br>
        PASSWORD  :
        <input type="password" placeholder="password"></input>
        <br></br>
        <button onClick={handleApi}>LOGIN</button>
        <Link to="/signup">SIGNUP</Link>

    </div>
}
export default  Login;
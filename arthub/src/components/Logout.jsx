import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";

function Logout(){
    const[username, setusername] = useState('');
    const[password, setupassword] = useState('');

    const handleApi=()=>{
        console.log({username,password});
    }


        
    return  <div>
        <Header></Header>
    </div>
}
export default  Logout;
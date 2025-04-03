import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { useState } from "react";
function AddProduct(){

const[pname, setpname] = useState('');
const[pdesc, setpdisc] = useState('');
const[price, setprice] = useState('');
const[category, setcategory] = useState('');
const[pimage, setpimage]= useState('');
    
    const handleApi= ()=>{

        const formData = new FormData();
        formData.append('pname', pname)
        formData.append('pdesc', pdesc)
        formData.append('price', price)
        formData.append('category', category)
        formData.append('pimage', pimage)
        //console.log({Pname, Pdisc, Price, Category});

        const url ='http://localhost:3000/add-product';
        axios.post(url, formData)
           .then((res)=> {
            console.log(res)
           })
           .catch((err)=> {
            console.log(err)
           })
    }


    
    return <div>
        <Header></Header>
        <div className="addproduct">
        <h1>ADD PRODUCT HERE : </h1>
        <label>product name</label>
        <input className="form-control" type="text" value={pname}
        onChange={(e)=>{
            setpname(e.target.value);
        }}></input>

        <label>product description:</label>
        <input className="form-control" type="text" value={pdesc}
        onChange={(e)=>{
            setpdisc(e.target.value);
        }}></input>

        <label>product price:</label>
        <input className="form-control" type="text" value={price}
        onChange={(e)=>{
            setprice(e.target.value);
        }}></input>

        <label>product category  :  </label>
        <select className="form-control" value={category}
        onChange={(e)=>{
            setcategory(e.target.value);
        }}>
            <option>choose</option>
            <option>painting</option>
            <option>handmade cloths</option>
            <option>woods items</option>
            <option>pottery</option>
        </select>

        <label>Product Image</label>
        <input className="form-control" type="file"
        onChange={(e)=>{
            setpimage(e.target.file[0]);
        }}></input>

        <button className="btn btn-primary" type="submit"  onClick={handleApi}>Submit</button>
        </div>
    </div>
}

export default AddProduct;
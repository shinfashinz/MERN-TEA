import React, { useState,useEffect } from 'react'
import axios from 'axios'
import convertToBase64 from '../../../../JS FILES BACKEND/base64'

const Adminproduct = () => {
let photo=""
const[getCat,setCat]=useState([])
const [val,setVal]=useState({
  name:"",
  category:"",
  description:"",
  price:"",
  stock:"",
  photo:""
})
const GetData=(e)=>{ 
  setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  console.log(val);
}
const Upload=async(e)=>{
  e.preventDefault()

  photo=await convertToBase64(e.target.files[0])
  console.log(photo);
}
const getCategory=async()=>{
  const res=await axios.get("http://localhost:4078/api/getcategory")
  setCat(res.data)
  console.log(getCat);
}
useEffect(()=>{
  getCategory()
},[])
const addProduct=async(e)=>{
  try {
   e.preventDefault()
   const res=await axios.post("http://localhost:4078/api/addproduct",{...val,photo:photo})
   console.log(res.data);
   if(res.status!=404){
     alert("Product Added")
   }
  } catch (error) {
     alert("error",error)
   }
  }

  return (
    <div>
      <div className="product-view">
        <div className="product-headding">
          <h2>Admin Product</h2>
        </div>
<div className="product-name">
  <input type="text" placeholder='name' name='name' onChange={GetData}/>
</div>
<div className="product-category">
<select className="my" name='category' type="text" placeholder='Category'   onChange={GetData} > 
				{
      getCat.map((data,index)=>
        <option name="category" value={data.category} key={index}>{data.category}</option>
     )
     }
      </select>
</div>
<div className="product-description">
  <input type="text" placeholder='description' name='description'onChange={GetData} />
</div>
<div className="product-price">
  <input type="text" placeholder='price' name='price' onChange={GetData} />
</div>
<div className="product-stock">
  <input type="text" placeholder='stock' name='stock' onChange={GetData}/>
</div>
<div className="product-image">
  <input type="file" name='photo' onChange={Upload} />
</div>
<div className="product-addd"><button onClick={addProduct}>Add</button></div>
      </div>
    </div>
  )
}

export default Adminproduct


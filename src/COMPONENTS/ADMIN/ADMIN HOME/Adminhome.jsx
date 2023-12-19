import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './adminhome.css'
const Adminhome = () => {


  const [getCat,setCat]=useState([])
  const getCategory=async()=>{
   const res= await axios.get("http://localhost:4078/api/getcategory")
    setCat(res.data)
  }
  useEffect(()=>{
    getCategory()
  },[])

 const delCategory=async(id)=>{
  // e.preventDefault();
  const res= await axios.delete(`http://localhost:4078/api/delcategory/${id}`)
  console.log(res.data);
  if(res.status!=404)
  {
    alert("category deleted")
  }
  else{
    alert("not deleted")
  }
  getCategory();
 } 

    const [msg,setMsg]=useState("")
    const value=JSON.parse(localStorage.getItem('admin_token'));

    const getName=async()=>{
        const res=await axios.get("http://localhost:4078/api/adminhome",{
            headers:{Authorization: `Bearer ${value}`},
        })
        setMsg(res.data.msg)
    }

    useEffect(()=>{
        getName() 
    },[])
  return (
    <div>
      <div className="adminHomemain">
        <div className="header">
            <div className="headerLeft"></div>
            <div className="headerRight">
                <div className="dispalyUsername">ADMIN:{msg}</div>
            </div>
        </div>
      </div>
{/* CATEGERY ,product */}


        
<div>
    <div className="admin-name">
      <a href=""><i class="fa fa-arrow-left" aria-hidden="true"></i>  Back</a>
    <h3> <i class="fa fa-user-circle-o" aria-hidden="true"></i>
{msg}</h3>
    </div>

    <div className="hero">
      <div className="category">
        <h3>Categories</h3>
      <Link to='/addcategory'> <button id='category-btn'> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Category</button>
</Link>
        <table className='category-table'>
         
         {
          getCat.map((data,index)=>
          
          <tr key={index}>
          <th>{data.category}</th>
          <td className='tab-btns'><button>EDIT</button>
          <Link to={`#${data._id}`}> <button onClick={()=>delCategory(data._id)}>DELETE</button></Link></td>

        </tr>
          
          )
         }
            </table>
      </div>
      <div className="products">
      <h3>Products</h3>
     <Link to='/addproduct'> <button id='category-btn'> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Product</button></Link>


      </div>
    </div>


      </div>






    </div>
  )
}

export default Adminhome

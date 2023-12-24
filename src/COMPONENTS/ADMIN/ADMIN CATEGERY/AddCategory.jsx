import React, { useState } from 'react'
import "./AddCategory.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {

    const navigate=useNavigate()
    const[val,setVal]=useState({
        category:"",
        about:""
    })
    
    const Getdata=(e)=>{ 
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        // console.log(val);
      }

      const addCategory=async(e)=>{
        e.preventDefault();

        const res=await axios.post("http://localhost:4078/api/addcategory",{...val})
        if(res.status!=404)
        {
            alert("successfully registerd")
            navigate("/adminhome")
        }
        else{
            alert("not add")
        }

      }

  return (
    <div>
        <div className="container">
	
	<div className="modal">
		<div className="modal__header">
			<span className="modal__title">Add Category</span><button className="button button--icon"><svg width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
					<path fill="none" d="M0 0h24v24H0V0z"></path>
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg></button>
		</div>
		<div className="modal__body">
			
			<div className="input">
                <input className="input__field" name='category' type="text" placeholder='Category' onChange={Getdata} />
			</div>
           
            <div className="input">
				<input className="input__field" name='about' type="text" placeholder='About' id='about-inp'  onChange={Getdata} /> 
			</div>

          
		</div>
		<div className="modal__footer">
			<button className="button button--primary" onClick={addCategory} >Add</button>
		</div>
	</div>
</div>
    </div>
  )
}

export default AddCategory
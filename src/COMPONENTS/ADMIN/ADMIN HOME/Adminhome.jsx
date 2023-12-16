import React, { useState,useEffect } from 'react'
import axios from 'axios'

import './adminhome.css'
const Adminhome = () => {
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
    </div>
  )
}

export default Adminhome

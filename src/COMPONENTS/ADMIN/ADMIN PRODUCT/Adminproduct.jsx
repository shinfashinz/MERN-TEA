import React, { useState } from 'react'

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

  return (
    <div>
      <div className="product-view">
        <div className="product-headding">
          <h2>Admin Product</h2>
        </div>
<div className="product-name">
  <input type="text" placeholder='name' name='name'/>
</div>
<div className="product-category">
  <input type="text" placeholder='Category' name='category' />
</div>
<div className="product-description">
  <input type="text" placeholder='price' name='ddescription' />
</div>
<div className="product-stock">
  <input type="text" placeholder='stock' name='stock'/>
</div>
<div className="product-image">
  <input type="file" name='photo' />
</div>
      </div>
    </div>
  )
}

export default Adminproduct


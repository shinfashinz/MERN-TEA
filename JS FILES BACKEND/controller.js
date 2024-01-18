import admin_schema from './admin.model.js'
import product_schema from './product.model.js'
import category_schema from "./category.model.js"

import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import pkg from "jsonwebtoken";

const {sign}=pkg

export async function addAdmin(req,res){
    try {
        const {username,email,phone,password}=req.body;
        console.log(email,password);
        if(!(username&&email&&phone&&password))
        return res.status(404).send("fields are empty")
    
        bcrypt.hash(password,10)    
        .then((hashedPwd)=>{
            admin_schema.create({username,email,phone,password:hashedPwd});
        })
        .then(()=>{
            res.status(201).send("sucessfully registered")
        })
      .catch((error)=>{
        res.status(500).send(error)
       })
        
       } catch (error) {
        console.log(error);
    
    }
    
}



export async function adminLogin(req, res) {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const usr = await admin_schema.findOne({ email })
        // console.log(usr.username);
        if (usr === null) return res.status(404).send("email or password doesnot exist");
        const success =await bcrypt.compare(password, usr.password)
        console.log(success);
        const {username}=usr
        if (success !== true) return res.status(404).send("email or password doesnot exist");
        const token = await sign({username}, process.env.JWT_KEY, { expiresIn: "24h" })
        console.log(username);
        // console.log(token);
        res.status(200).send({ msg: "successfullly login", token })
       //  res.end();
        
       } catch (error) {
        console.log(error); 
   }
}

export async function home(req,res)
{
    try {
        console.log(req.user);
        const {username}=req.user;
        res.status(200).send({msg:`${username}`})
        res.end()

    } catch (error) {
        res.status(404).send(error)

    }
}
export async function adminFrgtPwd(req, res) {
    const {email,password}=req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let task = await admin_schema.updateOne({ email }, { $set: { password: hashedPassword } });
    res.status(200).send(task);
}
 
export async function myCategory(req,res){
    try {
        const{category,about}=req.body;
        console.log(category,about);
        if(!(category&&about))
{
    return res.status(404).send("fields are empty")

}  

const task=await category_schema.create({category,about});
res.status(200).send(task)
  
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Is Error");
    }
}
export async function getCategory(req,res){ 
    let task=await category_schema.find()
    res.status(200).send(task)
}

export function delCategory(req,res)
{
    const{id}=req.params;
    const data=category_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}
export async function AddProducts(req, res) {
    try {
      const { ...products } = req.body;
      const task=await product_schema.create({ ...products });
  
      res.status(200).send(task);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
  export async function getCatDetails(req,res){
    const{id}=req.params;
    // console.log(id);
    let task=await category_schema.findOne({_id:id})
    console.log(task);
    res.status(200).send(task)
  }
  export async function editCategory(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await category_schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
  }
  export async function getCategoryWisedProduct(req, res) {
    try {
      const { category } = req.params;
    //   console.log(req.params);
      console.log(req.params);
      const products = await product_schema.find({ category: category });
  
      res.status(200).send(products);
    res.end()
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  }
  export function delProduct(req,res)
{
    const{id}=req.params;
    const data=product_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)          
    }).catch((error)=>{
        res.status(404).send(error)
    })
}
export async function getAllProducts(req,res){
    let task=await product_schema.find()
    res.status(200).send(task)
  }
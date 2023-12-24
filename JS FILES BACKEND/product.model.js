import mongoose from "mongoose";
const product_schema=new mongoose.Schema({
   
    name:{type:String},
  category:{type:String},
  description:{type:String},
  price:{type:String},
  stock:{type:String},
  photo:{type:String}
})
 
export default mongoose.model.PRODUCT||mongoose.model("Product",product_schema)
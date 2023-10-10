const express=require('express')
const Product=require('./models/product_model')
const app=express()
const port=8000


app.use(express.json())
app.use(express.urlencoded({extended: false}))

const dbconnect=require('./config/database');
dbconnect();
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
});

//post a product
app.post('/products',async(req,res)=>{
   try{
    const product=await Product.create(req.body);
    res.status(200).json(product);

   }catch(error){
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})

//fetch all product
app.get('/products',async(req,res)=>{
    try{
     const products=await Product.find({});
     res.status(200).json(products);
 
    }catch(error){
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })
 
 //fetch only one product
app.get('/products/:id',async(req,res)=>{
    try{
        const{id}=req.params;
     const product=await Product.findById(id);
     res.status(200).json(product);
 
    }catch(error){
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //update a product
 app.put('/products/:id',async(req,res)=>{
    try{
        const{id}=req.params;
     const product=await Product.findByIdAndUpdate(id,req.body);
     if(!product){
        return res.status(404).json({message:'cannot find any product with ID'})
     }
     const updatedProduct=await Product.findById(id);
     res.status(200).json(updatedProduct);
 
    }catch(error){
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //delete a product
 app.delete('/products/:id',async(req,res)=>{
    try{
        const{id}=req.params;
     const product=await Product.findByIdAndDelete(id,req.body);
     if(!product){
        return res.status(404).json({message:'cannot find any product with ID'})
     }
  
     res.status(200).json(product);
 
    }catch(error){
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })
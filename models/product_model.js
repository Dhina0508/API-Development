const mongoose=require('mongoose')

const Productschema=mongoose.Schema({
    name:{
        type: String,
        required: [true,"please enter name"]
    },
    quantity:{
        type:Number,
        required:true,
        default: 0
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required: false
    }
},{
    timestamps : true
}
)

const Product = mongoose.model('Product',Productschema);

module.exports=Product;
const mongoose = require('mongoose');
const productSchema= mongoose.Schema(
{
    name:{
        type: String,
        require:[true, "Enter Product Name"]
    },
    quantity:{
        type: String,
        require:[true, 'Plz Enter Product Quantity'],
        default: 0,
    },
    price:{
        type: String,
        require:[true, "Plz Enter Product Price"]
    }
},
{
    timestamps: true
}
);

const Product = mongoose.model('Product', productSchema)
module.exports = Product;
import mongoose, { mongo } from 'mongoose'

//schema is the document representaion os the database
//It is your object representation + single point of contact + handling validation
const productSchema = mongoose.Schema(
{
    productId:{
        type: mongoose.Schema.Types.Number
    },

    productName:{
        type: mongoose.Schema.Types.String,
        required: true
    },

    price:{
        type: mongoose.Schema.Types.Number,
        required: true
    },

    starRating:{
        type: mongoose.Schema.Types.Number,
        required: true
    },

    productAvailable:{
        type: mongoose.Schema.Types.String,
        required: true
    },

    productCode:{
        type: mongoose.Schema.Types.Number,
        required: true
    },

})

export default mongoose.model("Product", productSchema)
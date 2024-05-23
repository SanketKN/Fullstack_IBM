import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        
    name:{
        type: mongoose.Schema.Types.String,
        required: [true, 'Please add a name']
    },



    password:{
        type: mongoose.Schema.Types.Number,
        required: [true, 'Please add a password']
    },

    email:{
        type: mongoose.Schema.Types.String,
        required: [true, 'Please add a email']
    },

    isAdmin:{
        type: mongoose.Schema.Types.Number,
        required: true,
        default: false
    },

    }
)

export default mongoose.model("User",userSchema)
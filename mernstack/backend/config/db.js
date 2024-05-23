import mongoose from 'mongoose'

//we use async/await to make the program non-blocking
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://admin1234:admin1234@mern-cluster.3d4hh5r.mongodb.net/merndb?retryWrites=true&w=majority&appName=mern-cluster`)
        console.log(`connected to mongoDB ${conn.connection.host}`)
    } 
    
    catch (err) {
        console.error(`Failed to connect to mongoDB ${err.message}`)
    }

}

export default connectDB 
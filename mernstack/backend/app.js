import express from 'express'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
connectDB()
app.use(errorHandler)
app.listen(9999, ()=> console.log('server started'))
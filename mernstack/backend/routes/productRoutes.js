import express from 'express'
import { getProducts, addNewProduct, updateExistingProduct, deleteProduct, getProductsById } from '../controllers/productController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductsById)
router.route('/').post(protect,addNewProduct)
router.route('/:id').delete(protect,deleteProduct)
router.route('/:id').put(protect,updateExistingProduct)

export default router

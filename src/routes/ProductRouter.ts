import express from 'express';
import ProductController from '../controllers/ProductController';

const router = express.Router();

const productController = new ProductController();

router.post('/products', productController.create);
router.get('/products', productController.getAll);

export default router;
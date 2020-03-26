import express from 'express';
import ProductController from '../controllers/productsController';

const productRouter = express.Router();
productRouter.get('/', ProductController.getProducts);
productRouter.get('/:id', ProductController.getProduct);
productRouter.post('/', ProductController.createProduct);
productRouter.put('/', ProductController.updateProduct);
productRouter.delete('/:id', ProductController.deleteProduct);

export default productRouter;


import express from 'express';
import CategoriesController from '../controllers/categoriesController';

const categoriesRouter = express.Router();
categoriesRouter.get('/', CategoriesController.getCategories);
categoriesRouter.get('/:id', CategoriesController.getCategory);
categoriesRouter.post('/', CategoriesController.createCategory);
categoriesRouter.put('/', CategoriesController.updateCategory);
categoriesRouter.delete('/:id', CategoriesController.deleteCategory);

export default categoriesRouter;

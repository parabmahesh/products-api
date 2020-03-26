
import { Request, Response } from 'express';
import Category from '../models/categoryModel';
import logger from '../util/logger';

class CategoriesController {
  static getCategories(req:Request, res:Response) {
    logger.info('CategoriesController-getCategories');
    Category.find((err:any, product:any) => {
      if (err) {
        return res.send(err);
      }
      return res.json(product);
    });
  }

  static getCategory(req:Request, res:Response) {
    logger.info('CategoriesController-getCategory');
    const { id } = req.params;
    Category.findById(id, (err:any, product:any) => {
      if (err) {
        return res.send(err);
      }
      return res.json(product);
    });
  }

  static createCategory(req:Request, res:Response) {
    const categoryReqObj = req.body;
    logger.debug('CategoriesController-createCategory', categoryReqObj);
    const category = new Category(categoryReqObj);
    category.save((err, _category) => {
      logger.info('New prouct created successfully');
      if (err) {
        logger.error('Error in adding new category', err);
        return res.send(err);
      }
      return res.json(_category);
    });
  }

  static updateCategory(req:Request, res:Response) {
    logger.info('CategoriesController-updateCategory');
    const { id } = req.params;
    Category.findById(id, (err:any, _category:any) => {
      if (err) {
        return res.send(err);
      }

      if (_category) {
        // Category.save();
      }
      return res.json(_category);
    });
  }

  static deleteCategory(req:Request, res:Response) {
    logger.info('CategoriesController-deleteCategory');
    const { id } = req.params;
    Category.deleteOne({ _id: id }, (err:any) => {
      if (err) {
        return res.send(err);
      }
      return res.sendStatus(204);
    });
  }
}

export default CategoriesController;

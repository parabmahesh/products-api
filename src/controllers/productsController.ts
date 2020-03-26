
import { Request, Response } from 'express';
import Product from '../models/productModel';
import logger from '../util/logger';

class ProductsController {
  static getProducts(req:Request, res:Response) {
    logger.info('ProductsController-getProducts');
    Product.find((err:any, product:any) => {
      if (err) {
        return res.send(err);
      }
      return res.json(product);
    });
  }

  static getProduct(req:Request, res:Response) {
    logger.info('ProductsController-getProduct');
    const { id } = req.params;
    Product.findById(id, (err:any, product:any) => {
      if (err) {
        return res.send(err);
      }
      return res.json(product);
    });
  }

  static createProduct(req:Request, res:Response) {
    const productReqObj = req.body;
    logger.debug('ProductsController-createProduct', productReqObj);
    const product = new Product(req.body);
    product.save((err, prod) => {
      logger.info('New prouct created successfully');
      if (err) {
        logger.error('Error in adding new product', err);
        return res.send(err);
      }
      return res.json(prod);
    });
  }

  static updateProduct(req:Request, res:Response) {
    logger.info('ProductsController-updateProduct');
    const { id } = req.params;
    Product.findById(id, (err:any, product:any) => {
      if (err) {
        return res.send(err);
      }

      if (product) {
        product.save();
      }
      return res.json(product);
    });
  }

  static deleteProduct(req:Request, res:Response) {
    logger.info('ProductsController-delete');
    const { id } = req.params;
    Product.deleteOne({ _id: id }, (err:any) => {
      if (err) {
        return res.send(err);
      }
      return res.sendStatus(204);
    });
  }
}

export default ProductsController;

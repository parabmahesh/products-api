
import { Request, Response } from 'express';
import Supplier from '../models/supplierModel';
import logger from '../util/logger';

class SupplierController {
  static getSuppliers(req:Request, res:Response) {
    logger.info('SupplierController-getSuppliers');
    Supplier.find((err:any, product:any) => {
      if (err) {
        return res.send(err);
      }
      return res.json(product);
    });
  }

  static getSupplier(req:Request, res:Response) {
    logger.info('SupplierController-getSupplier');
    const { id } = req.params;
    Supplier.findById(id, (err:any, product:any) => {
      if (err) {
        return res.send(err);
      }
      return res.json(product);
    });
  }

  static createSupplier(req:Request, res:Response) {
    const supplierReqObj = req.body;
    logger.debug('SupplierController-createCategory', supplierReqObj);
    const supplier = new Supplier(supplierReqObj);
    supplier.save((err, _supplier) => {
      logger.info('New prouct created successfully');
      if (err) {
        logger.error('Error in adding new category', err);
        return res.send(err);
      }
      return res.json(_supplier);
    });
  }

  static updateSupplier(req:Request, res:Response) {
    logger.info('SupplierController-updateSupplier');
    const { id } = req.params;
    Supplier.findById(id, (err:any, _category:any) => {
      if (err) {
        return res.send(err);
      }

      if (_category) {
        // _category.save();
      }
      return res.json(_category);
    });
  }

  static deleteSupplier(req:Request, res:Response) {
    logger.info('SupplierController-deleteSupplier');
    const { id } = req.params;
    Supplier.deleteOne({ _id: id }, (err:any) => {
      if (err) {
        return res.send(err);
      }
      return res.sendStatus(204);
    });
  }
}

export default SupplierController;

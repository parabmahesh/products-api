
import express from 'express';
import SupplierController from '../controllers/supplierController';

const supplierRouter = express.Router();
supplierRouter.get('/', SupplierController.getSuppliers);
supplierRouter.get('/:id', SupplierController.getSupplier);
supplierRouter.post('/', SupplierController.createSupplier);
supplierRouter.put('/', SupplierController.updateSupplier);
supplierRouter.delete('/:id', SupplierController.deleteSupplier);

export default supplierRouter;

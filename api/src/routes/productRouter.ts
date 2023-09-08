import express from 'express';
import { ProductsData } from '../data/ProductsData';
import { ProductsBusiness } from '../business/ProductsBusiness';
import { ProductsController } from '../controller/ProductsController';
import multer from 'multer';
import { PacksData } from '../data/PacksData';

export const productsRouter = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

const productsController = new ProductsController(new ProductsBusiness(new ProductsData(), new PacksData()));

productsRouter.post('/validate', upload.single('file'), productsController.validate);

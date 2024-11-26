import { Router } from 'express';
import {
   listProducts,
   getProductById,
   createProduct,
   updateProduct,
   deleteProduct,
} from './productsController';

const router = Router();

// Define routes with appropriate HTTP methods
router.get('/', listProducts); // GET / -> List all products
router.get('/:id', getProductById); // GET /:id -> Get a specific product by ID
router.post('/', createProduct); // POST / -> Create a new product
router.put('/:id', updateProduct); // PUT /:id -> Update a product by ID
router.delete('/:id', deleteProduct); // DELETE /:id -> Delete a product by ID

export default router;

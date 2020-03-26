/* eslint-disable no-param-reassign */
import express from 'express';
import Book from '../models/bookModel';
import BookController from '../controllers/booksController';

// Use controller for HTTP method implementations
const booksController = BookController(Book);

// Subscribe to various HTTP methods
const bookRouter = express.Router();
bookRouter.get('/', booksController.getAllBooks);
bookRouter.get('/:id', booksController.getBookById);
bookRouter.post('/', booksController.createBook);
bookRouter.delete('/:id', booksController.deleteBook);
bookRouter.put('/:id', booksController.updateBook);

export default bookRouter;

/* eslint-disable no-param-reassign */
import express from 'express';
import Book from '../models/bookModel';
import BookController from '../controllers/booksController';

// Use controller for HTTP method implementations
const booksController = BookController(Book);

// Subscribe to various HTTP methods
const bookRouter = express.Router();
bookRouter.get('/books', booksController.getAllBooks);
bookRouter.get('/books/:id', booksController.getBookById);
bookRouter.post('/books', booksController.createBook);
bookRouter.delete('/books/:id', booksController.deleteBook);
bookRouter.put('/books/:id', booksController.updateBook);

export default bookRouter;

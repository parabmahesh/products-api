import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import authRoutes from './routes/authRoutes';
import bookRouter from './routes/bookRouter';
import productRouter from './routes/productRouter';
import passportConfig from './config/passport';
import categoriesRouter from './routes/categoriesRouter';
import supplierRouter from './routes/supplierRoutes';

const PORT = 3000;
const app = express();

// Connect to DB via mongoose
const db = mongoose.connect('mongodb://localhost:3001/bookAPI');

// Use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'library' }));


passportConfig(app);

// Register application routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRouter);
app.use('/api/products', productRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/suppliers', supplierRouter);



// Start listening
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

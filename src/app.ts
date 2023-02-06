import express from 'express';
import ProductRouter from './routes/ProductRouter';

const app = express();

app.use(express.json());
app.use(ProductRouter);

export default app;

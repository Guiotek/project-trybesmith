import express from 'express';
import ProductRouter from './routes/ProductRouter';
import UserRouter from './routes/UserRouter';

const app = express();

app.use(express.json());
app.use(ProductRouter);
app.use(UserRouter);

export default app;

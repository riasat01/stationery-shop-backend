import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import StationeryProductRouter from './app/modules/stationery-products/stationeryProduct.route';
import OrderRouter from './app/modules/orders/order.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use(`/api/products`, StationeryProductRouter);
app.use(`/api/orders`, OrderRouter);

app.get(`/`, (req: Request, res: Response) => {
  res.send(`Server is saying hi there`);
});

export default app;

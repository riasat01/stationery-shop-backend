import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import StationeryProductRouter from './app/modules/stationery-products/stationeryProduct.route';
import OrderRouter from './app/modules/orders/order.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.get(`/`, (req: Request, res: Response) => {
  res.status(200).json({
    message: `Server is responding`,
    success: true
  });
});
app.use(`/api/products`, StationeryProductRouter);
app.use(`/api/orders`, OrderRouter);

app.all(`*`, async (req: Request, res: Response) => {
  res.status(500).json({
    success: false,
    message: `Route doesn't exist!`,
  });
});

app.use((error: Error, req: Request, res: Response) => {
  if (error) {
    res.status(500).json({
      success: false,
      message: `Global error handler is saying something went wrong!`,
    });
  }
});

export default app;

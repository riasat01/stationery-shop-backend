import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import StationeryProductRoute from './app/modules/stationery-products/stationeryProduct.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use(`/api/products`, StationeryProductRoute);

app.get(`/`, (req: Request, res: Response) => {
  res.send(`Server is saying hi there`);
});

export default app;

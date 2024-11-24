import { Request, Response } from 'express';
import OrderServices from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderServices?.insertOrderIntoDB(order);
    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error,
      stack: (error as Error)?.stack,
    });
  }
};

const Ordercontrollers = {
  createOrder,
};

export default Ordercontrollers;

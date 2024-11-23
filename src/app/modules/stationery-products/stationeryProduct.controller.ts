import { Request, Response } from 'express';
import StationeryProductServices from './stationeryProduct.service';

const createStationeryProduct = async (req: Request, res: Response) => {
  try {
    const stationeryProduct = req.body;
    const result =
      await StationeryProductServices.insertStationeryProductIntoDB(
        stationeryProduct,
      );
    res.status(200).json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error,
      stack: (error as Error).stack
    });
  }
};

const StationeryProductControllers = {
  createStationeryProduct,
};

export default StationeryProductControllers;

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

const getAllStationeryProducts = async(req: Request, res: Response) => {
  try {
    const result = await StationeryProductServices?.findAllStationeryProductFromDB();
    res.status(200).json({
      message: 'Products retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong while retrieving the products',
      success: false,
      error,
      stack: (error as Error).stack
    });
  }
}
const getSingleStationeryProduct = async(req: Request, res: Response) => {
  try {
    const {productId} = req.params;
    const result = await StationeryProductServices?.findSingleStationeryProductFromDB(productId);
    res.status(200).json({
      message: 'Product retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong while retrieving the product',
      success: false,
      error,
      stack: (error as Error).stack
    });
  }
}

const StationeryProductControllers = {
  createStationeryProduct,
  getAllStationeryProducts,
  getSingleStationeryProduct
};

export default StationeryProductControllers;

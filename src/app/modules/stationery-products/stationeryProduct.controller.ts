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
      stack: (error as Error).stack,
    });
  }
};

const getAllStationeryProducts = async (req: Request, res: Response) => {
  try {
    const result =
      await StationeryProductServices?.findAllStationeryProductFromDB();
    res.status(200).json({
      message: 'Products retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error,
      stack: (error as Error).stack,
    });
  }
};
const getSingleStationeryProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result =
      await StationeryProductServices?.findSingleStationeryProductFromDB(
        productId,
      );
    res.status(200).json({
      message: 'Product retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error,
      stack: (error as Error).stack,
    });
  }
};

const updateStationeryProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await StationeryProductServices.updateStationeryProductInDB(
      productId,
      updateData,
    );
    res.status(200).json({
      message: 'Product updated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error,
      stack: (error as Error).stack,
    });
  }
};

const deleteStationeryProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await StationeryProductServices.deleteStationeryProductFromDB(productId);

    res.status(200).json({
      message: 'Product deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error,
      stack: (error as Error).stack,
    });
  }
};

const StationeryProductControllers = {
  createStationeryProduct,
  getAllStationeryProducts,
  getSingleStationeryProduct,
  updateStationeryProduct,
  deleteStationeryProduct,
};

export default StationeryProductControllers;

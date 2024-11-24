import { model, Schema } from 'mongoose';
import validator from 'validator';
import IStationeryProduct from './stationeryProduct.interface';

const stationeryProductSchema = new Schema<IStationeryProduct>(
  {
    name: {
      type: String,
      required: [true, `Product name is required`],
      validate: {
        validator: (value) => validator.isLength(value, { min: 1 }),
        message: `Product name cannot be empty`,
      },
    },
    brand: {
      type: String,
      required: [true, `Brand is required`],
      validate: {
        validator: (value) => validator.isLength(value, { min: 1 }),
        message: `Brand cannot be empty`,
      },
    },
    price: {
      type: Number,
      required: [true, `Price is required`],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      enum: [
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
      ],
      required: [
        true,
        `Category must be one of these 'Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'. {VALUE} is not valid`,
      ],
    },
    description: {
      type: String,
      required: [true, `Description is required`],
      validate: {
        validator: (value) => validator.isLength(value, { min: 1 }),
        message: `Description cannot be empty`,
      },
    },
    quantity: {
      type: Number,
      required: [true, `Quantity is required`],
      min: [0, 'Quantity must be a positive number'],
    },
    inStock: {
      type: Boolean,
      required: [true, `Stock status is required`],
    },
  },
  { timestamps: true },
);

const StationeryProduct = model<IStationeryProduct>(
  'StationeryProduct',
  stationeryProductSchema,
);
export default StationeryProduct;

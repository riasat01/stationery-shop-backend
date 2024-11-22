import { model, Schema } from 'mongoose';
import IStationeryProduct from './stationeryProduct.interface';

const stationeryProductSchema = new Schema<IStationeryProduct>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
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
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const StationeryProduct = model<IStationeryProduct>(
  'StationeryProduct',
  stationeryProductSchema,
);
export default StationeryProduct;

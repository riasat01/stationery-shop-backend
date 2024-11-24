import { model, Schema } from 'mongoose';
import validator from 'validator';
import IOrder from './order.interface';
// import StationeryProduct from "../stationery-products/stationeryProduct.model";

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, `Email is required`],
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: `{VALUE} is not a valid email`,
      },
    },
    product: {
      type: Schema.Types.ObjectId,
      required: [true, `Product is required`],
      ref: `StationeryProduct`,
    },
    quantity: {
      type: Number,
      required: [true, `Quantity is required`],
      min: [1, `Quantity must be at least 1`],
    },
    totalPrice: {
      type: Number,
      required: [true, `Total price is required`],
      validate: {
        validator: (value) => typeof value === 'number' && value >= 0,
        message: 'Total price must be a positive number',
      },
    },
  },
  { timestamps: true },
);

const Order = model<IOrder>(`Order`, orderSchema);

export default Order;

import IOrder from './order.interface';
import Order from './order.model';

const insertOrderIntoDB = async (order: IOrder) => {
  const result = await Order?.create(order);
  return result;
};

const OrderServices = {
  insertOrderIntoDB,
};

export default OrderServices;

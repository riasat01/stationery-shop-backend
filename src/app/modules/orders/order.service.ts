import IOrder from './order.interface';
import Order from './order.model';

const insertOrderIntoDB = async (order: IOrder) => {
  const result = await Order?.create(order);
  return result;
};

const calculateRevenueFromDB = async () => {
  const result = await Order?.aggregate([
    // lookup
    {
      $lookup: {
        from: 'stationeryproducts',
        localField: 'product',
        foreignField: '_id',
        as: 'productDetails',
      },
    },
    // unwind
    {
      $unwind: '$productDetails',
    },
    // project
    {
      $project: {
        quantity: 1,
        productPrice: { $toDouble: '$productDetails.price' },
      },
    },
    // add field to store the multiples
    {
      $addFields: {
        orderRevenue: { $multiply: ['$quantity', '$productPrice'] },
      },
    },
    // get the sum of all orderRevenue
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$orderRevenue' },
      },
    },
  ]);
  return result[0];
};

const OrderServices = {
  insertOrderIntoDB,
  calculateRevenueFromDB,
};

export default OrderServices;

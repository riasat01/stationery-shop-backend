import IStationeryProduct from './stationeryProduct.interface';
import StationeryProduct from './stationeryProduct.model';

const insertStationeryProductIntoDB = async (
  stationeryProduct: IStationeryProduct,
) => {
  const result = await StationeryProduct?.create(stationeryProduct);
  return result;
};

const findAllStationeryProductFromDB = async () => {
  const result = await StationeryProduct?.find();
  return result;
}

const findSingleStationeryProductFromDB = async (_id: string) => {
  const result = await StationeryProduct?.findOne({ _id });
  return result;
}

const StationeryProductServices = {
  insertStationeryProductIntoDB,
  findAllStationeryProductFromDB,
  findSingleStationeryProductFromDB
};

export default StationeryProductServices;

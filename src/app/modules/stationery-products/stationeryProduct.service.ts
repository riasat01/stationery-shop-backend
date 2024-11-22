import IStationeryProduct from './stationeryProduct.interface';
import StationeryProduct from './stationeryProduct.model';

const insertStationeryProductIntoDB = async (
  stationeryProduct: IStationeryProduct,
) => {
  const result = await StationeryProduct?.create(stationeryProduct);
  return result;
};

const StationeryProductServices = {
  insertStationeryProductIntoDB,
};

export default StationeryProductServices;

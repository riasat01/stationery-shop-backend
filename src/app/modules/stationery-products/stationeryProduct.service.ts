import IStationeryProduct from "./stationeryProduct.interface";
import StationeryProduct from "./stationeryProduct.model";

const createStationeryProduct = async (stationeryProduct: IStationeryProduct) => {
    const result = await StationeryProduct?.create(stationeryProduct);
    return result;
}

const StationeryProductServices = {
    createStationeryProduct
}

export default StationeryProductServices;
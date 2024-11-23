import { Router } from 'express';
import StationeryProductControllers from './stationeryProduct.controller';

const router = Router();

router.post(`/`, StationeryProductControllers?.createStationeryProduct);
router.get(`/`, StationeryProductControllers?.getAllStationeryProducts);
router.get(
  `/:productId`,
  StationeryProductControllers?.getSingleStationeryProduct,
);
router.put(
  `/:productId`,
  StationeryProductControllers?.updateStationeryProduct,
);
router.delete(
  `/:productId`,
  StationeryProductControllers?.deleteStationeryProduct,
);

export default router;

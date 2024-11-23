import { Router } from "express";
import StationeryProductControllers from "./stationeryProduct.controller";

const router = Router();

router.post(`/`, StationeryProductControllers?.createStationeryProduct);
router.get(`/`, StationeryProductControllers?.getAllStationeryProducts)

export default router
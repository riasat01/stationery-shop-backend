import { Router } from 'express';
import Ordercontrollers from './order.controller';

const router = Router();

router.post(`/`, Ordercontrollers?.createOrder);
router.get(`/revenue`, Ordercontrollers?.calculateRevenue);

export default router;

import { Router } from 'express';
import Ordercontrollers from './order.controller';

const router = Router();

router.post(`/`, Ordercontrollers?.createOrder);

export default router;

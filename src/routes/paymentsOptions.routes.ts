import { Router } from "express";
import PaymentsOptionsController from "../controllers/PaymentsOptionsConstroller";
import CheckPaymentOpValidate from "../middlewares/checkPaymentsOpValidate";
import requestSchema from "../middlewares/checkPaymentsOpValidator";


const paymentOptionsRouter = Router();
const paymentsOptionsController = new PaymentsOptionsController();

paymentOptionsRouter.post("/", CheckPaymentOpValidate(requestSchema), paymentsOptionsController.create);
paymentOptionsRouter.get("/", paymentsOptionsController.find);

export default paymentOptionsRouter;

import { Router } from "express";
import categoriesRouter from "../../../modules/categories/routes/categories.routes";

const routes = Router();

routes.use("/categories", categoriesRouter);

export default routes;

import { Router } from "express";
import categoriesRouter from "../../../modules/categories/routes/categories.routes";
import articlesRouter from "../../../modules/articles/routes/articles.routes";
const routes = Router();

routes.use("/categories", categoriesRouter);
routes.use("/articles", articlesRouter);

export default routes;

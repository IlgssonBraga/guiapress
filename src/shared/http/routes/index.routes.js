import { Router } from "express";
import categoriesRouter from "../../../modules/categories/routes/categories.routes";
import articlesRouter from "../../../modules/articles/routes/articles.routes";
import adminRouter from "../../../modules/admin/routes/admin.routes";
const routes = Router();

routes.use("/categories", categoriesRouter);
routes.use("/admin", adminRouter);
routes.use("/articles", articlesRouter);

export default routes;

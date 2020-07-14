import { Router } from "express";
import Category from "../../categories/app/models/Category";

const adminRouter = Router();

adminRouter.get("/", (req, res) => {
  res.send("Admin");
});

adminRouter.get("/categories/new", (req, res) => {
  res.render("admin/categories/new.ejs");
});

adminRouter.get("/categories", (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/categories/index.ejs", { categories });
  });
});
export default adminRouter;

import { Router } from "express";

const adminRouter = Router();

adminRouter.get("/", (req, res) => {
  res.send("Admin");
});

adminRouter.get("/categories/new", (req, res) => {
  res.render("admin/categories/new.ejs");
});
export default adminRouter;

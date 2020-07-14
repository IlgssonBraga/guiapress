import { Router } from "express";
import Category from "../app/models/Category";
import slugify from "slugify";
const categoriesRouter = Router();

categoriesRouter.get("/", (req, res) => {
  res.send("Categories");
});

categoriesRouter.post("/save", (req, res) => {
  const title = req.body.title;
  if (!title) {
    res.redirect("/admin/categories/new");
  } else {
    Category.create({ title, slug: slugify(title) }).then(() =>
      res.redirect("/")
    );
  }
});

export default categoriesRouter;

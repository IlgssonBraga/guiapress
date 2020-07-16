import { Router } from "express";
import Category from "../app/models/Category";
import slugify from "slugify";
import Article from "../../articles/app/models/Article";
const categoriesRouter = Router();
import adminAuth from "../../../shared/http/middlewares/adminAuth";

categoriesRouter.get("/", (req, res) => {
  res.send("Categories");
});

categoriesRouter.post("/save", adminAuth, (req, res) => {
  const title = req.body.title;
  if (!title) {
    res.redirect("/admin/categories/new");
  } else {
    Category.create({ title, slug: slugify(title) }).then(() =>
      res.redirect("/admin/categories/")
    );
  }
});

categoriesRouter.post("/update", adminAuth, (req, res) => {
  const { id, title } = req.body;
  Category.update({ title, slug: slugify(title) }, { where: { id } }).then(
    () => {
      res.redirect("/admin/categories");
    }
  );
});

categoriesRouter.get("/:slug", (req, res) => {
  const slug = req.params.slug;

  Category.findOne({ where: { slug }, include: [{ model: Article }] })
    .then((category) => {
      if (category) {
        Category.findAll().then((categories) => {
          console.log(categories);
          res.render("index", { articles: category.articles, categories });
        });
      } else {
        res.redirect("/");
      }
    })
    .catch(() => res.redirect("/"));
});

export default categoriesRouter;

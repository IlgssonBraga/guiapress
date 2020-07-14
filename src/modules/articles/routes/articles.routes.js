import { Router } from "express";
import Article from "../app/models/Article";
import slugify from "slugify";

const articlesRouter = Router();

articlesRouter.post("/save", (req, res) => {
  const { title, body, category } = req.body;

  Article.create({
    title,
    slug: slugify(title),
    body,
    categoryId: category,
  }).then(() => {
    res.redirect("/admin/articles");
  });
});

export default articlesRouter;

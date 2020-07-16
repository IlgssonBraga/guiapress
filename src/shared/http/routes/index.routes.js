import { Router } from "express";
import categoriesRouter from "../../../modules/categories/routes/categories.routes";
import articlesRouter from "../../../modules/articles/routes/articles.routes";
import adminRouter from "../../../modules/admin/routes/admin.routes";
import Article from "../../../modules/articles/app/models/Article";
import Category from "../../../modules/categories/app/models/Category";
const routes = Router();

routes.use("/categories", categoriesRouter);
routes.use("/admin", adminRouter);
routes.use("/articles", articlesRouter);

routes.get("/", (req, res) => {
  Article.findAll({
    order: [["id", "DESC"]],
    limit: 4,
  }).then((articles) => {
    Category.findAll().then((categories) => {
      res.render("index.ejs", { articles, categories });
    });
  });
});

routes.get("/:slug", (req, res) => {
  const slug = req.params.slug;
  Article.findOne({ where: { slug } })
    .then((article) => {
      if (article) {
        Category.findAll().then((categories) => {
          res.render("article", { article, categories });
        });
      } else {
        res.redirect("/");
      }
    })
    .catch((e) => res.redirect("/"));
});

export default routes;

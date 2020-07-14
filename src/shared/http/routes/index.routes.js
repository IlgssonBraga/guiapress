import { Router } from "express";
import categoriesRouter from "../../../modules/categories/routes/categories.routes";
import articlesRouter from "../../../modules/articles/routes/articles.routes";
import adminRouter from "../../../modules/admin/routes/admin.routes";
import Article from "../../../modules/articles/app/models/Article";
const routes = Router();

routes.use("/categories", categoriesRouter);
routes.use("/admin", adminRouter);
routes.use("/articles", articlesRouter);

routes.get("/", (req, res) => {
  Article.findAll({
    order: [["id", "DESC"]],
  }).then((articles) => {
    res.render("index.ejs", { articles });
  });
});

routes.get("/:slug", (req, res) => {
  const slug = req.params.slug;
  Article.findOne({ where: { slug } })
    .then((article) => {
      if (article) {
        res.render("article", { article });
      } else {
        res.redirect("/");
      }
    })
    .catch((e) => res.redirect("/"));
});

export default routes;

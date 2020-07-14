import { Router } from "express";
import Category from "../../categories/app/models/Category";
import Article from "../../articles/app/models/Article";

const adminRouter = Router();

adminRouter.get("/", (req, res) => {
  res.send("Admin");
});

adminRouter.get("/categories/new", (req, res) => {
  res.render("admin/categories/new.ejs");
});

adminRouter.post("/categories/delete", (req, res) => {
  const id = req.body.id;

  if (id) {
    if (!isNaN(id)) {
      Category.destroy({ where: { id } }).then(() =>
        res.redirect("/admin/categories")
      );
    } else {
      res.redirect("/admin/categories");
    }
  } else {
    res.redirect("/admin/categories");
  }
});

adminRouter.get("/categories", (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/categories/index.ejs", { categories });
  });
});

adminRouter.get("/categories/edit/:id", (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  Category.findByPk(id)
    .then((category) => {
      if (category) {
        res.render("admin/categories/edit.ejs", { category });
      } else {
        res.redirect("/admin/categories");
      }
    })
    .catch((e) => {
      res.redirect("/admin/categories");
    });
});

adminRouter.get("/articles/new", (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/articles/new.ejs", { categories });
  });
});

adminRouter.get("/articles", (req, res) => {
  Article.findAll().then((articles) => {
    console.log(articles);
    res.render("admin/articles/index.ejs", { articles });
  });
});
export default adminRouter;

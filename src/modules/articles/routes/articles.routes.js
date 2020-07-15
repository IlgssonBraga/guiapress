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

articlesRouter.post("/delete", (req, res) => {
  const id = req.body.id;

  if (id) {
    if (!isNaN(id)) {
      Article.destroy({ where: { id } }).then(() =>
        res.redirect("/admin/articles")
      );
    } else {
      res.redirect("/admin/articles");
    }
  } else {
    res.redirect("/admin/articles");
  }
});

articlesRouter.post("/update", (req, res) => {
  const { id, title, body, category } = req.body;

  Article.update(
    {
      id,
      title,
      body,
      categoryId: category,
      slug: slugify(title),
    },
    { where: { id } }
  )
    .then(() => {
      res.redirect("/admin/articles");
    })
    .catch(() => res.redirect("/"));
});

articlesRouter.get("/page/:page", (req, res) => {
  const page = req.params.page;
  var offset = 0;

  if (isNaN(page) || page == 1) {
    offset = 0;
  } else {
    offset = (parseInt(page) - 1) * 4;
  }

  Article.findAndCountAll({ limit: 4, offset }).then((articles) => {
    let next;

    if (offset + 4 >= articles.count) {
      next = false;
    } else {
      next = true;
    }

    const result = {
      next,
      articles,
    };

    res.json(result);
  });
});

export default articlesRouter;

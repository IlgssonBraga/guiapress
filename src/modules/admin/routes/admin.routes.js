import { Router } from "express";
import Category from "../../categories/app/models/Category";
import Article from "../../articles/app/models/Article";
import User from "../../admin/app/models/User";
import bcrypt from "bcryptjs";
import adminAuth from "../../../shared/http/middlewares/adminAuth";

const adminRouter = Router();

adminRouter.get("/", (req, res) => {
  res.send("Admin");
});

adminRouter.get("/categories/new", adminAuth, (req, res) => {
  res.render("admin/categories/new.ejs");
});

adminRouter.post("/categories/delete", adminAuth, (req, res) => {
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

adminRouter.get("/categories", adminAuth, (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/categories/index.ejs", { categories });
  });
});

adminRouter.get("/categories/edit/:id", adminAuth, (req, res) => {
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

adminRouter.get("/articles/new", adminAuth, (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/articles/new.ejs", { categories });
  });
});

adminRouter.get("/articles", adminAuth, (req, res) => {
  Article.findAll({
    include: [{ model: Category }],
  }).then((articles) => {
    console.log(articles);
    res.render("admin/articles/index.ejs", { articles });
  });
});

adminRouter.get("/articles/edit/:id", adminAuth, (req, res) => {
  const id = req.params.id;

  Article.findByPk(id)
    .then((article) => {
      if (article) {
        Category.findAll().then((categories) => {
          res.render("admin/articles/edit.ejs", { categories, article });
        });
      } else {
        res.redirect("/admin/articles");
      }
    })
    .catch(() => res.redirect("/admin/articles"));
});

adminRouter.get("/users/create", adminAuth, (req, res) => {
  res.render("admin/users/create.ejs");
});

adminRouter.post("/users/create", adminAuth, (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      User.create({ email, password: hashPassword })
        .then(() => {
          res.redirect("/admin/users");
        })
        .catch((e) => res.redirect("/admin"));
    } else {
      res.redirect("/admin/users");
    }
  });
});

adminRouter.get("/users", adminAuth, (req, res) => {
  User.findAll().then((users) => {
    res.render("admin/users/index.ejs", { users });
  });
});

adminRouter.get("/login", (req, res) => {
  res.render("admin/users/login.ejs");
});

adminRouter.post("/authenticate", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (user) {
      const correct = bcrypt.compareSync(password, user.password);
      if (correct) {
        req.session.user = {
          id: user.id,
          email: user.email,
        };

        res.redirect("/admin/articles");
      } else {
        res.redirect("/admin/login");
      }
    } else {
      res.redirect("/admin/login");
    }
  });
});

adminRouter.get("/logout", (req, res) => {
  req.session.user = undefined;
  res.redirect("/");
});

export default adminRouter;

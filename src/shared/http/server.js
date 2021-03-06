import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import path from "path";
import connection from "../config/database";
import routes from "./routes/index.routes";
// import Category from "../../modules/categories/app/models/Category";
// import Article from "../../modules/articles/app/models/Article";
import User from "../../modules/admin/app/models/User";

const app = express();

app.set("view engine", "ejs");

app.use(
  session({
    secret: "teste",
    cookie: { maxAge: 30000000000000000 },
  })
);

app.use(express.static(path.resolve(__dirname, "..", "..", "..", "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

connection
  .authenticate()
  .then(() => console.log("success"))
  .catch((e) => console.log(e));

app.use(routes);

app.listen(3333, () => console.log("Server running on http://localhost:3333"));

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import connection from "../config/database";
import routes from "./routes/index.routes";
import Article from "../../modules/articles/app/models/Article";
import Category from "../../modules/categories/app/models/Category";

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "..", "..", "..", "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

connection
  .authenticate()
  .then(() => console.log("success"))
  .catch((e) => console.log(e));

app.use(routes);

app.listen(3333, () => console.log("Server running on http://localhost:3333"));

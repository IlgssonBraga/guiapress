import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3333, () => console.log("Server running on http://localhost:3333"));

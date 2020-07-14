import { Router } from "express";

const articlesRouter = Router();

articlesRouter.get("/", (req, res) => {
  res.send("Articles");
});

export default articlesRouter;

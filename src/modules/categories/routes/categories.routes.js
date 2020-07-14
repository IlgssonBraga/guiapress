import { Router } from "express";

const categoriesRouter = Router();

categoriesRouter.get("/", (req, res) => {
  res.send("Categories");
});

export default categoriesRouter;

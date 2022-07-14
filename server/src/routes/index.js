import express from "express";
import { indexPage, imagePage } from "../controllers";
const indexRouter = express.Router();

indexRouter.get("/", indexPage);
indexRouter.get("/images", imagePage);

export default indexRouter;

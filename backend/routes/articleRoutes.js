import express from "express";
import { listAllArticles, getArticle } from "../controllers/articleController.js";

const router = express.Router();

router.get("/", listAllArticles);
router.get("/:id", getArticle);

export default router;

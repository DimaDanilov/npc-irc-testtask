const express = require("express");
const authorController = require("../controllers/author.controller");
const router = express.Router();

router.get("/", authorController.getAuthors);
router.get("/:id", authorController.getAuthor);
router.post("/", authorController.createAuthor);
router.put("/", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;

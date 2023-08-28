const express = require("express");
const authorController = require("../controllers/author.controller");
const router = express.Router();

router.get("/", authorController.getAuthors);

module.exports = router;

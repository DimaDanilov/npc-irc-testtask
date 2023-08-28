const express = require("express");
const router = express.Router();
const bookRouter = require("./book.routes");
const authorRouter = require("./author.routes");

router.use("/book", bookRouter);
router.use("/author", authorRouter);

module.exports = router;

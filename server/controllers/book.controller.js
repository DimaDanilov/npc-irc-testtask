const GeneralError = require("../error/GeneralError");
const { Book } = require("../models/book.model");

class BookController {
  async getBooks(req, res, next) {
    try {
      const books = await Book.findAll({
        attributes: ["id", "title", "publicationDate", "price"],
      });
      return res.json(books);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }
}

module.exports = new BookController();

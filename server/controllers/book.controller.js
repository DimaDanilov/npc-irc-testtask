const sequelize = require("../db");
const GeneralError = require("../error/GeneralError");
const { Book } = require("../models/book.model");

class BookController {
  async getBooks(req, res, next) {
    try {
      if (req.query.page && !(Number(req.query.page) > 0)) {
        return next(GeneralError.badRequest("Page should be more than 0"));
      }
      if (req.query.page && !(Number(req.query.page_limit) > 0)) {
        return next(GeneralError.badRequest("Page items limit is wrong"));
      }
      const books = await Book.findAll({
        attributes: ["id", "title", "publication_date", "price"],
        limit: Number(req.query.page) ? req.query.page_limit : undefined,
        offset: Number(req.query.page)
          ? req.query.page_limit * (req.query.page - 1)
          : undefined,
        order: [["id"]],
      });
      return res.json(books);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }

  async getBook(req, res, next) {
    try {
      const book = await sequelize.query(
        `SELECT id, title, publication_date, price FROM "Book" WHERE id = ${req.params.id} limit 1`,
        { model: Book }
      );
      return res.json(book[0]);
      // const book = await Book.findOne({
      //   attributes: ["id", "title", "publication_date", "price"],
      //   where: {
      //     id: req.params.id,
      //   },
      // });
      // return res.json(book);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }

  async createBook(req, res, next) {
    try {
      if (
        !req.body.title ||
        !req.body.publication_date ||
        !req.body.price ||
        !req.body.author_id
      ) {
        return next(GeneralError.badRequest("You didn't add all data"));
      }
      const newBook = await Book.create({
        title: req.body.title,
        publication_date: req.body.publication_date,
        price: req.body.price,
        author_id: req.body.author_id,
      });
      res.json(newBook);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }

  async updateBook(req, res, next) {
    try {
      if (!req.body.id || !(Number(req.body.id) > 0)) {
        return next(GeneralError.badRequest("Book id is invalid"));
      }
      if (req.body.author_id && !(Number(req.body.author_id) > 0)) {
        return next(GeneralError.badRequest("Author id should be more than 0"));
      }
      const existBook = await Book.findOne({
        attributes: ["id", "title", "publication_date", "price"],
        where: { id: req.body.id },
      });
      if (!existBook) {
        throw new Error("There is no book with this id");
      }
      const changedBook = await Book.update(
        {
          title: req.body.title,
          publication_date: req.body.publication_date,
          price: req.body.price,
          author_id: req.body.author_id,
        },
        {
          where: { id: req.body.id },
          returning: true,
          plain: true,
        }
      );
      return res.json(changedBook[1]);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }

  async deleteBook(req, res, next) {
    try {
      if (!Number(req.params.id > 0)) {
        return next(GeneralError.badRequest("Book id should be more than 0"));
      }
      const bookToDelete = await Book.findOne({
        attributes: ["id"],
        where: { id: req.params.id },
      });

      if (!bookToDelete) {
        throw new Error("There is no such book with this id to delete");
      }
      const deletedBook = await Book.destroy({
        where: { id: bookToDelete.id },
      });
      return res.json(deletedBook);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }
}

module.exports = new BookController();

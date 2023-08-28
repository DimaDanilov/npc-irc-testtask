const GeneralError = require("../error/GeneralError");
const { Author } = require("../models/author.model");

class AuthorController {
  async getAuthors(req, res, next) {
    try {
      if (req.query.page && !(Number(req.query.page) > 0)) {
        return next(GeneralError.badRequest("Page should be more than 0"));
      }
      if (req.query.page && !(Number(req.query.page_limit) > 0)) {
        return next(GeneralError.badRequest("Page items limit is wrong"));
      }
      const authors = await Author.findAll({
        attributes: ["id", "name", "surname", "birthdate"],
        limit: Number(req.query.page) ? req.query.page_limit : undefined,
        offset: Number(req.query.page)
          ? req.query.page_limit * (req.query.page - 1)
          : undefined,
        order: [["id"]],
      });
      return res.json(authors);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }

  async getAuthor(req, res, next) {
    try {
      const author = await Author.findOne({
        attributes: ["id", "name", "surname", "birthdate"],
        where: {
          id: req.params.id,
        },
      });
      return res.json(author);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }

  async createAuthor(req, res, next) {
    try {
      if (!req.body.name || !req.body.surname || !req.body.birthdate) {
        return next(GeneralError.badRequest("You didn't add all data"));
      }
      const newAuthor = await Author.create({
        name: req.body.name,
        surname: req.body.surname,
        birthdate: req.body.birthdate,
      });
      res.json(newAuthor);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }

  async updateAuthor(req, res, next) {
    try {
      if (!req.body.id || !(Number(req.body.id) > 0)) {
        return next(GeneralError.badRequest("Author id is invalid"));
      }
      const existAuthor = await Author.findOne({
        attributes: ["id", "name", "surname", "birthdate"],
        where: { id: req.body.id },
      });
      if (!existAuthor) {
        throw new Error("There is no author with this id");
      }
      const changedAuthor = await Author.update(
        {
          name: req.body.name,
          surname: req.body.surname,
          birthdate: req.body.birthdate,
        },
        {
          where: { id: req.body.id },
          returning: true,
          plain: true,
        }
      );
      return res.json(changedAuthor[1]);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }

  async deleteAuthor(req, res, next) {
    try {
      if (!Number(req.params.id > 0)) {
        return next(GeneralError.badRequest("Author id should be more than 0"));
      }
      const authorToDelete = await Author.findOne({
        attributes: ["id"],
        where: { id: req.params.id },
      });

      if (!authorToDelete) {
        throw new Error("There is no such author with this id to delete");
      }

      const deletedAuthor = await Author.destroy({
        where: { id: authorToDelete.id },
      });
      return res.json(deletedAuthor);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }
}

module.exports = new AuthorController();

const GeneralError = require("../error/GeneralError");
const { Author } = require("../models/author.model");

class AuthorController {
  async getAuthors(req, res, next) {
    try {
      const authors = await Author.findAll({
        attributes: ["id", "name", "surname", "birthdate"],
      });
      return res.json(authors);
    } catch (e) {
      return next(GeneralError.badRequest(e.message));
    }
  }
}

module.exports = new AuthorController();

const Pet = require("../models/Pet");

module.exports = class PetController {
  // Creating pet
  static async create(req, res) {
    const {} = req.body;

    res.json({
      message: "Deu certo",
    });
  }
};

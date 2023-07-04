const User = require("../models/User");

module.exports = class UserController {
  static async register(req, res) {
    const { name, email, password, phone, confirmPassword } = req.body;

    if (!name && !email && !password && !confirmPassword) {
      res.status(422).json({
        message: "Preencha TODOS os campos antes de continuar!",
      });
      return;
    }

    if (!name) {
      res.status(422).json({
        message: "O NOME é obrigatório!",
      });
      return;
    }

    if (!email) {
      res.status(422).json({
        message: "O EMAIL é obrigatório!",
      });
      return;
    }

    if (!password) {
      res.status(422).json({
        message: "A SENHA é obrigatória!",
      });
      return;
    }

    if (!phone) {
      res.status(422).json({
        message: "O TELEFONE é obrigatório!",
      });
      return;
    }

    if (!confirmPassword) {
      res.status(422).json({
        message: "Você deve confirmar sua senha antes de continuar!",
      });
      return;
    }

    if (confirmPassword !== password) {
      res.status(422).json({
        message: "As senhas não coincidem!",
      });
      return;
    }

    // Cheking if user exist
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      res.status(422).json({
        message: "Este EMAIL já está sendo utilizado!",
      });
      return;
    }
  }
};

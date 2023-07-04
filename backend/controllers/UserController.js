const User = require("../models/User");
const bcrypt = require("bcrypt");
const createUserToken = require("../helpers/create-users-token");

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

    // Creating user password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Creating user
    const user = new User({
      name,
      email,
      phone,
      password: passwordHash,
    });
    try {
      const newUser = await user.save();
      await createUserToken(newUser, req, res);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    if (!email && !password) {
      res.status(422).json({
        message: "Preencha TODOS os campos antes de continuar!",
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

    // Cheking if user exist
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(422).json({
        message: "Usuário não encontrado!",
      });
      return;
    }

    // Cheking if password match w/ db password
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      res.status(422).json({
        message: "Senha inválida!",
      });
      return;
    }

    await createUserToken(user, req, res);
  }
};

const Pet = require("../models/Pet");

// Helpers
const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");

module.exports = class PetController {
  static async create(req, res) {
    const { name, age, weight, sex, color } = req.body;

    const images = req.files;

    let available = true;

    // Images upload

    // Validations
    if (!name && !age && !weight && !sex && !color && !images) {
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

    if (!age) {
      res.status(422).json({
        message: "A IDADE é obrigatória!",
      });
      return;
    }

    if (!weight) {
      res.status(422).json({
        message: "O PESO é obrigatório!",
      });
      return;
    }

    if (!sex) {
      res.status(422).json({
        message: "Informe o SEXO do animal!",
      });
      return;
    }

    if (!color) {
      res.status(422).json({
        message: "Informe a COR do animal!",
      });
      return;
    }

    console.log(images);

    if (images.length === 0) {
      res.status(422).json({
        message: "As imagens do animal são obrigatórias!",
      });
      return;
    }

    // Pet owner
    const token = getToken(req);
    const owner = await getUserByToken(token);

    // Creating pet
    const pet = new Pet({
      name,
      age,
      weight,
      sex,
      color,
      available,
      images: [],
      user: {
        _id: owner.id,
        name: owner.name,
        email: owner.email,
        phone: owner.phone,
        image: owner.image,
      },
    });

    images.map((image) => {
      pet.images.push(image.filename);
    });

    try {
      const newPet = await pet.save();

      res.status(201).json({
        message: "O seu pet foi cadastrado com sucesso!",
        newPet,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  static async getAll(req, res) {
    const pets = await Pet.find().sort("-createdAt");

    res.status(200).json({
      pets: pets,
    });
  }
};

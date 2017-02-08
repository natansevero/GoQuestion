const Questions = require('./../models/questions');

const QuestionsController = {
  create: (req, res) => {
    let question = req.body;

    Questions.create(question, (err, result) => {
      if(err) return console.log("Error Question Controller Create:", err);
      return res.status(200).json(result);
    });
  },

  retrieve: (req, res) => {
    Questions.retrieve((err, result) => {
      if(err) return console.log("Error Question Controller Retrieve:", err);
      return res.status(200).json(result.rows);
    });
  },

  getOne: (req, res) => {
    let codigo = req.params.codigo;

    Questions.getOne(codigo, (err, result) => {
      if(err) return console.log("Error Question Controller Get One:", err);
      return res.status(200).json(result.rows);
    });
  }
}

module.exports = QuestionsController;

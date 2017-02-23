const Polls = require('./../models/polls');
const jsts = require('jsts');

const reader = new jsts.io.WKTReader();

const PollsController = {
  create: (req, res) => {
    let id_question = req.params.id_question;
    let response = req.body;

    Polls.create(id_question, response, (err, result) => {
      if(err) return console.log("Error create Polls Controller:", err);
      return res.status(200).json(result.rows);
    })
  },

  getOne: (req, res) => {
    let id_question = req.params.id_question;

    Polls.getOne(id_question, (err, result) => {
      if(err) return console.log("Error get One Polls Controller:", err);

      let polls = result.rows;

      polls.forEach(el => {
        let point = reader.read(el.st_asewkt);
        el.st_asewkt = {
          latitude: point.getX(),
          longitude: point.getY()
        }
      });

      return res.status(200).json(polls);
    })
  }

}

module.exports = PollsController;

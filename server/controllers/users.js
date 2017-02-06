const Users = require('./../models/users');
const jsts = require('jsts');
const reader = new jsts.io.WKTReader();

const UsersController = {
  create: (req, res) => {
    let user = req.body.user;
    console.log(user);

    Users.create(user, (err, result) => {
      if(err) return console.log('Error User Controller: ', err);
      return res.status(200).json(result);
    })
  },
  retrieve: (req, res) => {
    Users.retrieve((err, result) => {
      if(err) return console.log('Error User Controller: ', err);
      let user = result.rows;

      user.forEach(el => {
        let point = reader.read(el.st_asewkt);
        el.st_asewkt = {
          lat: point.getX(),
          lng: point.getY()
        }
      });

      return res.status(200).json(user);
    })
  }
}

module.exports = UsersController;

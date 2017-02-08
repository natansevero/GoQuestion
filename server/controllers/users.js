const Users = require('./../models/users');
const jsts = require('jsts');
const jwt = require('jsonwebtoken');
const cfg = require('./../config/jwt');
const crypto = require('crypto');

const reader = new jsts.io.WKTReader();

const UsersController = {
  create: (req, res) => {
    let user = req.body;
    console.log(user);

    user.token = jwt.sign(user, cfg.jwtSecret);
    user.senha = crypto.createHash('md5')
                       .update(user.senha)
                       .digest('hex');

    Users.create(user, (err, result) => {
      if(err) return console.log('Error User Controller: ', err);
      return res.status(200).json(result);
    })
  },

  authenticate: (req, res) => {
    let user = req.body;

    user.senha = crypto.createHash('md5')
                       .update(user.senha)
                       .digest('hex');

    Users.authenticate(user, (err, result) => {
      if(err) return console.log('Error User Controller:', err);
      return res.status(200).json(result.rows);
    })
  },

  authToken: (token) => {
    Users.authToken(token, (err, result) => {
      return result.rows[0].count;
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

const Users = require('./../models/users');

const UsersController = {
  retrieve: (req, res) => {
    Users.retrieve((err, result) => {
      if(err) return console.log('Error: ', err);
      return res.json(result);
    })
  }
}

module.exports = UsersController;

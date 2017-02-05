const pg = require('pg');
const conString = 'postgres://postgres:12345@localhost:5432/GoQuestion';

const Users = {
  retrieve: (callback) => {
    pq.connect(conString, (err, client) => {
      if(err) return console.log("Error: ", err);
      client.query("", callback);
    });
  }
}

module.exports = Users;

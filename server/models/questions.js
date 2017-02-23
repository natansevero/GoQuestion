const pg = require('pg');
const conString = 'postgres://postgres:12345@localhost:5432/GoQuestion';

const Questions = {
  create: (question, callback) => {
    pg.connect(conString, (err, client) => {
      if(err) return console.log('Error Question Model Create:', err);
      client.query(
        `insert into questao(pergunta) values ('${question.pergunta}')`,
        callback
      );
    });
  },

  retrieve: (callback) => {
    pg.connect(conString, (err, client) => {
      if(err) return console.log("Error Question Model Retrieve:", err);
      client.query('select * from questao', callback);
    })
  },

  votes: (callback) => {
    pg.connect(conString, (err, client) => {
      if(err) return console.log("Error Question Model Votes:", err);
      client.query(
        `select u.id, e.codigo_pergunta from enquete e, usuario u
        where u.id = e.id_usuario`,
        callback
      )
    })
  },

  getOne: (codigo, callback) => {
    pg.connect(conString, (err, client) => {
      if(err) return console.log("Error Question Model Get One:", err);
      client.query(`select * from questao where codigo = ${codigo}`, callback);
    })
  }

}

module.exports = Questions;

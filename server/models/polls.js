const pg = require('pg');
const conString = 'postgres://postgres:12345@localhost:5432/GoQuestion';

const Polls = {
  create: (id_question, response, callback) => {
    pg.connect(conString, (err, client) => {
      if(err) return console.log("Error create Polls Model:", err);
      client.query(
        `insert into enquete values (${response.id_user}, ${id_question}, '${response.response}')`,
        callback
      );
    });
  },

  getOne: (id_question, callback) => {
    pg.connect(conString, (err, client) => {
      if(err) return console.log("Error getOne Polls Model:", err);
      client.query(
        `select u.id, u.usuario, u.idade, u.escolaridade, st_asewkt(u.localizacao),
        q.pergunta, e.resposta from usuario u, questao q, enquete e
        where e.id_usuario = u.id
        and e.codigo_pergunta = q.codigo
        and e.codigo_pergunta = ${id_question}`,
        callback
      );
    })
  }
}

module.exports = Polls;

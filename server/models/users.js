const pg = require('pg');
const conString = 'postgres://postgres:12345@localhost:5432/GoQuestion';

const Users = {
  create: (user, callback) => {
    console.log(user.user);

    pg.connect(conString, (err, client) => {
      if(err) return console.log("Error Create UserModel: ", err);
      client.query(
        `insert into usuario(usuario, sexo, idade, renda, escolaridade, localizacao, email, senha, tipo, token)
        values ('${user.nome}', '${user.sexo}', ${user.idade}, ${user.renda}, '${user.escolaridade}',
        ST_GeomFromText('POINT(${user.localizacao.lat} ${user.localizacao.lng})'), '${user.email}',
        '${user.senha}', '${user.tipo}', '${user.token}')`,
        callback
      );
    });
  },

  authenticate: (user, callback) => {
    pg.connect(conString, (err, client) => {
      if(err) return console.log("Error Authenticate UserModel:", err);
      client.query(
        `select usuario, email, senha, tipo, token from usuario
        where email ilike '${user.email}' and senha ilike '${user.senha}'`,
        callback
      );
    })
  },

  authToken: (token, callback) => {
    pq.connect(conString, (err, client) => {
      if(err) return console.log("Error authToken UserModel:", err);
      client.query(`select count(*) from usuario where token ilike ${token}`, callback);
    })
  },

  retrieve: (callback) => {
    pg.connect(conString, (err, client) => {
      if(err) return console.log("Error: ", err);
      client.query(
        `select id, usuario, sexo, idade, renda, escolaridade, st_AsEwkt(localizacao), email, senha, tipo, token
        from usuario`,
        callback);
    });
  }
}

module.exports = Users;

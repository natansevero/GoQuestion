const pg = require('pg');
const conString = 'postgres://postgres:12345@localhost:5432/GoQuestion';

const Users = {
  create: (user, callback) => {
    console.log(user.user);
    pg.connect(conString, (err, client) => {
      if(err) return console.log("Error Create UserModel: ", err);
      client.query(
        `insert into usuario(usuario, sexo, idade, renda, escolaridade, localizacao, email, senha, tipo)
        values ('${user.nome}', '${user.sexo}', ${user.idade}, ${user.renda}, '${user.escolaridade}',
        ST_GeomFromText('POINT(${user.localizacao.lat} ${user.localizacao.lng})'), '${user.email}',
        '${user.senha}', '${user.tipo}')`,
        callback
      );
    });
  },
  retrieve: (callback) => {
    pg.connect(conString, (err, client) => {
      if(err) return console.log("Error: ", err);
      client.query(
        `select usuario, sexo, idade, renda, escolaridade, st_AsEwkt(localizacao), email, senha, tipo
        from usuario`,
        callback);
    });
  }
}

module.exports = Users;

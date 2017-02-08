const users = require('./../controllers/users');

module.exports = (req, res, next) => {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];

        if(users.authToken(bearerToken) > 0) req.token = bearerToken;
        else res.send(403);

        next();
    } else {
        res.send(403);
    }
}

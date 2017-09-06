var jwt    = require('jwt-simple');  
var moment = require('moment');  
var config = require('./configSystem');

exports.createToken = function(user) {  
  var payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};

exports.ensureAuthenticated = function(req, res, next) {
  
  /*console.log("SESSION AQUI ",req.session)
  if(req.session.userName == undefined){
    return res
      .status(402)
      .send({message: "Tu sessión ya termino."});
  }*/
  console.log(req.url.indexOf('report'))
  if(req.url.indexOf('report') >= 0) {
    next();
    return res.status(200)
  }
  if(!req.headers.authorization) {
    return res
      .status(403)
      .send({message: "Tu petición no tiene cabecera de autorización"});
  }

  var token = req.headers.authorization.split(" ")[1];
  try{
    var payload = jwt.decode(token, config.TOKEN_SECRET);
    if(payload.exp <= moment().unix()) {
       return res
           .status(401)
          .send({message: "El token ha expirado"});
    }
    
  }catch(err){
   return res
           .status(401)
          .send({message: "El token ha expirado"}); 
  }


  req.user = payload.sub;
  next();
};


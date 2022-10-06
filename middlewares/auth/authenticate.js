const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  //get token from request.header('key')
  const token = req.header("token");

  try {
    //check if token is valid
    //decode token
    const decode = jwt.verify(token, "secret-key-of-user");

    console.log("decode", decode); //decode {
    // 	email: 'trieu@gmail.com',
    // 	type: 'CLIENT',
    // 	iat: 1665030431,
    // 	exp: 1665034031
    //   }

    if (decode) {
      req.user = decode; // assign the decode object to the req.user
      return next();
    } else {
      res.status(401).send({
        message: "You are not authorized to access this/ you have not login",
      });
    }
  } catch (error) {
    // res.status(500).send(error);
    res.status(401).send({
      message: "You are not authorized to access this/ you have not login",
    });
  }
};
module.exports = { authenticate };

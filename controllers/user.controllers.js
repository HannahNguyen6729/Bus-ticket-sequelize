const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//console.log(User);
const register = async (req, res) => {
  const { name, password, phoneNumber, email } = req.body;
  try {
    //create a random string
    const salt = bcrypt.genSaltSync(10);
    //encode the password
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phoneNumber,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  //check and compare the password and the encoded password
  //1. find the user signing in the server base on email
  //2. check if the password is true, if true --> user can login
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    const isAuth = bcrypt.compareSync(password, user.password);
    console.log("isAuth ", isAuth);
    if (isAuth) {
      const token = jwt.sign(
        //first parameter: the data you want to decode
        {
          email: user.email,
          type: user.type,
        },
        "secret-key-of-user", //secret key used for security
        //expire time of the token
        {
          expiresIn: 60 * 60,
        }
      );
      res.status(200).send({ message: "Login successfully!", token: token });
    } else {
      res.status(500).send({ message: "account or password mismatch!" });
    }
  } else {
    res.status(404).send({ message: "cannot find the matched email" });
  }
};
module.exports = { register, login };

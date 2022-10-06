const authorize = (userTypeArray) => {
  return (req, res, next) => {
    const { user } = req;
    //console.log("user authorize", user);
    if (userTypeArray.findIndex((ele) => ele == user.type) !== -1) {
      next();
    } else {
      res.status(403).send({ message: "You already login but not authorized" });
    }
    // if (["ADMIN", "SUB_ADMIN"].findIndex((ele) => ele == user.type) !== -1) {
    //   next();
    // } else {
    //   res.status(403).send({ message: "You already login but not authorized" });
    // }
  };
};
module.exports = { authorize };

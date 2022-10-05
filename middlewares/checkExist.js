const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    //check if the station already exists
    const station = await Model.findOne({ where: { id } });
    if (station) {
      next();
    } else {
      res.status(404).send(`cannot find the station with id: ${id}`);
    }
  };
};
module.exports = { checkExist };

const express = require("express");
const app = express();
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");
const port = 3000;

//reading json
app.use(express.json());

// static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));

//router
app.use("/api/v1", rootRouter);

app.listen(port, async () => {
  console.log("listening on port " + port);
  //testing the connection
  try {
    await sequelize.authenticate();
    console.log("connection has been established successfully");
  } catch (error) {
    console.error("unable to connect to the database ", error);
  }
});

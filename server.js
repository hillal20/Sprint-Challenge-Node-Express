const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
server.use(bodyParser.json());
server.use(cors());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("hilal aissni");
  console.log("hilalal");
});

const actionModelRoute = require("./actionModelRoute");
const projectModelRoute = require("./projectModelRoute");

server.use("/actions", actionModelRoute);
server.use("/projects", projectModelRoute);

server.listen(5002);

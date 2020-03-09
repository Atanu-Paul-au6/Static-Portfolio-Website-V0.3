const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

//setting up all the required middlewares
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(8080, () => {
  console.log("Server Started");
});

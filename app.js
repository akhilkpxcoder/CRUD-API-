const express = require("express");
const bodyParser = require("body-parser");
const UserRouter = require("./src/router/user-router");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
//to router
app.use("/users", UserRouter);

//to home page
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
//not found error
app.all("*", (req, res) => {
  res.status(404);
  res.send("You've tried reaching a route that doesn't exist.");
});

//server creation
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);


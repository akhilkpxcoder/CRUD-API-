
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const users = require("./src/router/user-router");
const login = require("./src/router/login-router");
const mongoose = require('mongoose');
const docs = require('./docs');
const db = require('./config/mongoose').dbcon;

const swaggerUI = require("swagger-ui-express");

// swaggerDocument = require("./swagger.json");
// app.use(
//   '/api-docs',
//   swaggerUi.serve, 
//   swaggerUi.setup(swaggerDocument)
// );

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.info('MongoDb Connected'))
  .catch(err => console.warn(err));

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// var options = {
//   explorer: true,
//   swaggerOptions: {
//     authAction: {
//       JWT: {
//         name: 'JWT',
//         schema: {
//           type: 'apiKey',
//           in: 'header',
//           name: 'Authorization',
//           description: ''
//         },
//         value: 'Bearer <my own JWT token>'
//       }
//     }
//   }
// };

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));
app.use('/api/users', users);
app.use('/api/login', login);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
//not found error
app.all("*", (req, res) => {
  res.status(404);
  res.send("You've tried reaching a route that doesn't exist.");
});
const PORT = 8081;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
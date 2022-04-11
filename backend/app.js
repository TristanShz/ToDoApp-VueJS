require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;
const cluster = process.env.MONGO_URL;
const db = process.env.MONGO_DB_TODOS;

mongoose
  .connect("mongodb://" + cluster + "/" + db, {
    pass,
    user,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((e) => {
    console.log(e, "Connexion à MongoDB échouée! ! ");
  });

const app = express();
const todosRoutes = require("./routes/todos");
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

// app.use("api/v1/todos", todosRoutes);
app.use("/api/v1/todos", todosRoutes);

const userRoutes = require("./routes/users");

app.use(userRoutes);

module.exports = app;

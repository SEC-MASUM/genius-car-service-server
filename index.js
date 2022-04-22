const express = require("express");
const cors = require("cors");
require("dotenv").config(); // tuse .env file

const app = express();
const host = "localhost";
const port = process.env.PORT || 5000;

// middleware
app.use(cors()); // to get different port access
app.use(express.json()); // to parse body data

app.get("/", (req, res) => {
  res.send("Running Genius Car Server");
});

app.listen(port, () => {
  console.log(`Server is running http://${host}:${port}`);
});

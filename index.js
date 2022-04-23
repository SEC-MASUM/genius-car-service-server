const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config(); // tuse .env file

const app = express();
const host = "localhost";
const port = process.env.PORT || 5000;

// middleware
app.use(cors()); // to get different port access
app.use(express.json()); // to parse body data

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ag1p9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("Genius Car DB connected");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("Running Genius Car Server");
});

app.listen(port, () => {
  console.log(`Server is running http://${host}:${port}`);
});

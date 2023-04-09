const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const port = process.env.PORT || "9000";
const app = express();

// MONGO
const mongo = require("mongodb");
const client = new mongo.MongoClient("mongodb://127.0.0.1:27017", {
  useNewUrlParser: true,
});
client.connect();
const db = client.db("testdb");
const testcol = db.collection("testcol");

// MIDDLEWARE
// app.use(express.static(path.resolve(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.get("/text-api", (req, res) => {
  res.send("text");
});
app.get("/", (req, res) => {
  res.send("welcome");
});

const object = JSON.stringify({ type: "dog", name: "azor" });

app.get("/json-api", (req, res) => {
  res.send(object);
});

app.get("/mongo", async (req, res) => {
  const data = await testcol.find({ name: "rex" }).toArray();
  res.send(data);
});

// LISTEN
app.set("port", port);
const server = http.createServer(app);
server.listen(port);

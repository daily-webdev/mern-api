const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const port = process.env.PORT || "9000";
const app = express();

// app.use(express.static(path.resolve(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/api", (req, res) => {
  res.send("api");
});
app.get("/", (req, res) => {
  res.send("welcome");
});

app.set("port", port);
const server = http.createServer(app);
server.listen(port);

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const secret = crypto.randomBytes(64).toString("hex");

function generateAccessToken(userId) {
  console.log(userId);
  return jwt.sign(userId, secret);
}
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secret, (err, userId) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.userId = userId;

    next();
  });
}

const app = express();

app.use(cors());

app.use(bodyParser.json());

const PORT = 4005;

const users = [];
const accounts = [];

let userIds = 1;

app.post("/users", (req, res) => {
  const user = req.body;
  console.log("req body: " + user.username + " " + user.password);
  user.id = userIds++;
  users.push(user);

  const account = {
    money: "100",
    userId: user.id,
  };

  console.log(users);

  res.statusCode = 200;
  res.send("ok");
});

app.post("/sessions", (req, res) => {
  const user = req.body;

  const dbUser = users.find((u) => u.username == user.username);

  if (dbUser != null && dbUser.password == user.password) {
    const token = generateAccessToken(dbUser.id);
    res.json({ token });
    console.log("token ,", token);
  } else {
    res.status = 401;
    res.json();
  }
});

app.get("/me/accounts", authenticateToken, (req, res) => {
  console.log("userId:", req.userId);

  res.json({ userId: req.userId });
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});

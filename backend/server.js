 import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
  const app = express();
  
  app.use(cors());
  
  app.use(bodyParser.json());
  
  const PORT = 4005;
  
  const users = [];
  
  let userIds = 1;
  
  app.post("/users", (req, res) => {
    const user = req.body;
    console.log("req body: " + user.username + " " + user.password);
    user.id = userIds++;

    username.push(user)

    console.log(users);
    res.statusCode = 200;
    res.send("ok");
  });
  
  app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
  });
  

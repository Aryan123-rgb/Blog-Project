const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const { connectToMongoDB } = require("./connect");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const cookieParser = require("cookie-parser");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use("/usersPic", express.static(__dirname + "/usersPic"));

connectToMongoDB("mongodb://localhost:27017/blog-nest").then(() =>
  console.log("Mongodb connected")
);

app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);

app.listen(port,()=>console.log('Server started on ' + port))
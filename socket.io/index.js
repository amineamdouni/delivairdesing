const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const socket = require("socket.io");
const messageRoutes = require("./routes/messages");
const usersRoutes = require("./routes/users");
const http = require("http");
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/DelivChat", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);
// const server = app.listen(3000, () => console.log(`Server started on 3000`));
server.listen(3000, () => console.log("server started on 3000"));

const io = socket(server, {
  cors: {
    origin: "http://127.0.0.1:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log("User Socket id : ", socket.id);
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    console.log(userId);
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    console.log("userSocket::===>", sendUserSocket);
    if (sendUserSocket) {
      //need to save before emitting
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});

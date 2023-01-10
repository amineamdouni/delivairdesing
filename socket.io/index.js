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
  .connect("mongodb+srv://root:root@delivair.1zg97hn.mongodb.net/delivair", {
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
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    // console.log(data);
    // const sendUserSocket = onlineUsers.get(data.to);
    // console.log("userSocket::===>", sendUserSocket);
    // if (sendUserSocket) {
    //  socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    // }
     socket.to("63b54b3536c92210d680f473").emit("msg-recieve", data.msg);
  });

  socket.on("disconnect", () => {
    socket.disconnect();
    console.log("🔥: A user disconnected");
  });
});

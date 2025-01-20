const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
    },
});

app.use(
    cors({
        origin: ["http://localhost:3000"],
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

io.on("connection", (socket) => {
    console.log("a user connected");
});

server.listen(4000, () => {
    console.log("listening on *:4000");
});

app.post("/uploadQ", (req, res) => {
    const question = req.body.question;
    console.log("emmiting");
    io.emit("question", question);
});

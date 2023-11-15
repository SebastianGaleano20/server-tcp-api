import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) => {
  socket.on("data", () => {
    console.log("El cliente me mando un mensaje *-*");
  });

  socket.on("error", () => {
    console.log("El cliente tuvo un error :|");
  });

  socket.on("close", () => {
    console.log("Cliente desconectado :(");
  });

  console.log("Cliente conectado exitosamente :)");
});

serverTCP.listen(port, () => {
  console.log("Servidor en escucha por el puerto", port);
});
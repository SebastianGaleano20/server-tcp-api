import net from "node:net";
import dotenv from "dotenv";
import {
  getPizzas,
  getPizzaById,
  addPizza,
  deletePizzaById
} from "../controller/controller.js";
dotenv.config();

const port = process.env.PORT;

const serverTCP = net.createServer();

const processRequest = (req) => {
  // req ->  ["getPizzaById", "1"]
  const action = req[0];

  const newPizza = {
    id: Number(req[1]),
    ingredientes: "ingredientes jeje",
    nombre: req[2],
    precio: Number(req[3]),
    tamaño: req[4],
  };

  switch (action) {
    case "getPizzas":
      return getPizzas();
    case "getPizzaById":
      return getPizzaById(Number(req[1]));
    case "addPizza":
      return addPizza(newPizza);
    case "deletePizzaById":
      return deletePizzaById(Number(req[1]));
    default:
      return "Petición incorrecta"; 
  }
};

serverTCP.on("connection", (socket) => {
  socket.on("data", (dataClient) => {
    const data = JSON.parse(dataClient.toString());
    const response = processRequest(data);
    socket.write(JSON.stringify(response));
  });

  socket.on("error", () => {
    console.log("Client Error");
  });
  socket.on("close", () => {
    console.log("Cliente disconnected");
  });
  console.log("Client connected");
});

serverTCP.listen(port, () => {
  console.log("Servidor en escucha por el puerto", port);
});
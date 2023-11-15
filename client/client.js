import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const options = {
    port: process.env.PORT,
    host: process.env.HOST
}

const clientTCP = net.createConnection(options);

clientTCP.on("connect", ()=>{
    console.log("conecction successful");
    clientTCP.end();
})
clientTCP.on("data",()=>{
    console.log("Answer of server");
})
import express from "express";
import routes from "./routes/index.js";
import db from "./config/dbConnection.js";

db.on("error",console.log.bind(console, "Erro de conexão"));
db.once("open",()=>{
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();

app.use(express.json());
routes(app);

export default app;
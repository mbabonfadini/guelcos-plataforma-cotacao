import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_LOGIN}:${process.env.MONGO_DB_PASSWORD}@projeto-guelcos.zlegng8.mongodb.net/${process.env.MONGO_DB}`)

let db = mongoose.connection;

export default db;
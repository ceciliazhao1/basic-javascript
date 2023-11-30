// ngrok http https://localhost:8080

import { getLocation } from "./routes/getLocation.js";
import { startUp } from "./routes/startup.js";
import { getDevice } from "./routes/get-device.js";
import express from "express";
import https from "https";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const port = 8080;
const app = express();

const httpsOptions = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};
const server = https.createServer(httpsOptions, app);

app.use(express.json());
app.use("/", [startUp, getLocation, getDevice]);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


// index.js - test connection
//app.get("/dbtest", async (req, res) => {
//    const connection = await dbClient.collection("students").find().toArray();
//    res.send({ connection });
//});
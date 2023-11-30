import express from "express";
import { getUserZipCode } from "../controller/getUserZipCode.js";

export const getLocation = express.Router();

getLocation.get("/get-location", async (req, res) => {
  const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  try {

    const dbClient = getDatabaseClient();
    if (userIp) {
        const location = await getUserZipCode(userIp);
        const collection = await dbClient.collection('students').find().toArray();
        console.log(collection, "collection")
        res.send(collection) 
        
        res.send({ userLocation: location });

        return location;
    }
  } catch (err) {
    console.error(err);
    res.send({ error: err });
  }

  res.send({ userIp });
});
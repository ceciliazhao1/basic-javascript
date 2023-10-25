import express from 'express';
import * as dotenv from 'dotenv';
//import { getTrackingMore } from './routers/createTrackingMore.js'; 
import { getDetails } from './routers/getTrackMore.js';
import { createTracker } from './routers/createTrackMore.js';

import https from 'https';
import fs from 'fs';
import { getLoggerInstance } from './logger.js';    

// Load environment variables
dotenv.config();
const PORT = process.env.PORT;

const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

const app = express();
const loggers = getLoggerInstance();
const server = https.createServer(httpsOptions,app);

// Middleware
app.use(express.json());

// app.use('/TrackingMore', getTrackingMore);
app.use('/TrackingMore', getDetails);
app.use('/TrackingMore', createTracker);


server.listen(PORT, () => {
    loggers.info(`Server is running on port ${PORT}`);
});

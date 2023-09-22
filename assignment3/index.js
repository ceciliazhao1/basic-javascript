//  this is a https web-server
const https = require('https');
const express = require('express');
const port = 8080

app = express();

const fs = require('fs');
const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
const server = https.createServer(httpsOptions,app);

// Route for the home page
app.get('/', (req, res) => {
  res.send('Hello World!');
}  );

// Route for checking if the web service is live
app.get('/live', (req, res) => {
    res.json({ status: 'Web Service is live' });
});

// Route for checking if the startup has started
app.get('/startup', (req, res) => {
    // Assuming you have a variable or condition to check if the startup has started
    const isStartupStarted = true; // Change this based on your logic
    
    if (isStartupStarted) {
        res.json({ status: 'Startup has started' });
    } else {
        res.json({ status: 'Startup has not started yet' });
    }
});

// GET Route with custom headers

app.get('/set-header', (req, res) => {

    // Set custom response headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Custom-Header', 'Hello from GET route');
   
    // Send a JSON response
    res.send({ message: 'This is a GET request' });
});

// server listening on port 8080
server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});
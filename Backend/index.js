const path = require('path');
const express = require("express");

const hostname = "127.0.0.1";
const port = 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, '../Frontend/dist')));

app.post("/api/validate-form", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Frontend/public', 'index.html'));
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
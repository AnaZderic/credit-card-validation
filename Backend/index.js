const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');
const {baseCheck} = require("./src/baseCheck");

const hostname = "127.0.0.1";
const port = 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, '../Frontend/dist')));
app.use(bodyParser.json());

app.post("/api/validate-form", (req, res) => {
    let formData = req.body;
    let bc = baseCheck(formData);

    if(bc.success)
    {
        res.status(200).json(bc);
    } else {
        res.status(400).json(bc);
    }  
});
  
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Frontend/public', 'index.html'));
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
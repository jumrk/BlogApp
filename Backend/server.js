const express = require('express');
const connect = require('./config/db');
const app = express();
const PORT = 5000;

connect();

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Đã khởi động sever với cổng http://localhost:${PORT}`);
})
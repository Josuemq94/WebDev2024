//write server application in index.js.
import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>X</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact ME</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About ME</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
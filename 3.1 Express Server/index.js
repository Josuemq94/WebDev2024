//write server application in index.js.

import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
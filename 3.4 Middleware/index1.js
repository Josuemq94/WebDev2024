import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// use bodyparser that passing information coming in
app.use(bodyParser.urlencoded({extended: true}));

// Serve static files from the public directory
app.use(express.static('public'));

// Route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req, res) => {
  console.log(req.body);
  res.send('Data received')
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

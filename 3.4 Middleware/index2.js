import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res,) => {
  res.send("Hello World!");
});

app.post("/submit",(req, res) => {
  console.log(req.body);
  res.send('Data Received thru port3000')
});

app.listen(port, () => {
  console.log(`'Server is running on port'${port}`);
});


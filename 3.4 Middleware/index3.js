import express from "express";

const app = express();
const port = 3000;

function logger (req, res, next){
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  //next method
  next();
}

app.use(logger)

app.get("/", (req, res) => {
  res.send("Hello World Josue");
});

app.listen(port, () => {
  console.log(`Server running  on port ${port}`);
});

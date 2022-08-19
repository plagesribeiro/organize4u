import express from "express";

const app = express();

// get hello world
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);

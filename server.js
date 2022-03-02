const express = require("express");
const app = express();
const port = 8085;

app.use((req, res, next) => {
  console.log(req.url);
  next();
});
app.get("/", (req, res) => {
  console.log(req.headers);
  res.send("all good");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

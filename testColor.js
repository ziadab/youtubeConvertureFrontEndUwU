const ColorThief = require("colorthief");
const express = require("express");
const app = express();
    


app.get("/", async (req, res) => {
  const imageLink = req.query.image;
  const colorThief = await ColorThief.getColor(imageLink);
  //console.log(colorThief);
  res.send(`
  <html style="background-color: rgb(${colorThief})"><img src=${imageLink}></html>
  `);
});

app.listen(5000, () => {
  console.log("IN 5000 listining");
});

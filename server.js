const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send(
    `<h3>There's 99 Bottles of beer on the wall~</h3><a href="/98">Take one down, pass it around...</a>`
  );
});

app.get("/:number_of_bottles", (req, res) => {
    if (req.params.number_of_bottles <= 0 ) {
      res.send(
        `<h1>Please call or text the 24/7 Addiction Helpline at 331-227-5290.</h1><h3>There are no more bottles of beer on the wall.</h3><a href="/">Starting over?</a>`
      );
    }
    else {
      res.send(`<h3>There's ${
        req.params.number_of_bottles
      } Bottles of beer on the wall~</h3><a href='/${
        req.params.number_of_bottles - 1
      }'>Take one down, pass it around...</a>`
    );
    }
});

app.listen(PORT, ()=>{
  console.log('starting server at port: ' + PORT)
})

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// test route
app.get("/", (req, res) => {
  res.send("Ice Cream Server Running");
});


// icecream API
app.get("/icecream", (req, res) => {
  res.json([
    {
      name: "Chocolate",
      price: 50,
      image: "choco.png"
    },
    {
      name: "Vanilla",
      price: 40,
      image: "vanilla.png"
    },
    {
      name: "Strawberry",
      price: 60,
      image: "straw.png"
    }
  ]);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server started");
});
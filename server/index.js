
const User = require("./models/User");
const IceCream = require("./models/IceCream");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/icecreamDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));
// Add Ice Cream
app.post("/add", async (req, res) => {
  try {
    const data = new IceCream(req.body);
    await data.save();
    res.send("Ice cream added");
  } catch (err) {
    console.log(err);
    res.send("Error");
  }
});
// Get all ice cream
app.get("/icecream", async (req, res) => {
  try {
    const data = await IceCream.find();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.send("Error");
  }
});


app.get("/", (req, res) => {
  res.send("Ice Cream Server Running");
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server started");
});
app.post("/signup", async (req, res) => {
  const data = new User(req.body);
  await data.save();
  res.send("User created");
  app.post("/login", async (req, res) => {

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    res.send("Login success");
  } else {
    res.send("Wrong user");
  }

});
});

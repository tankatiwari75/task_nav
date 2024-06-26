const jwt = require("jsonwebtoken");
const express = require("express");
const Model = require("../models/userModel");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const dublicateData = await Model.findOne({
      email: req.body.email,
    });
    if (dublicateData) {
      res.status(400).json({ message: "Email already exist" });
    } else {
      const data = new Model({
        fullname: req.body.fullname,
        email: req.body.email,
        team_number: req.body.team_number,
        password: req.body.password,
      });

      const dataToSave = await data.save();

      const token = jwt.sign(
        {
          email: dataToSave.email,
          fullname: dataToSave.fullname,
          id: dataToSave._id.toString(),
        },
        "Bhr1kut1T0ken",
        {
          expiresIn: "2h",
        }
      );
      res.status(200).json({
        token: token,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = await Model.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (user) {
      const token = jwt.sign(
        {
          email: user.email,
          fullname: user.fullname,
          id: user._id.toString(),
          status: user.status,
        },
        "LifePreserverT0ken"
      );
      res.status(200).json({
        token: token,
      });
    } else {
      res.status(404).json({ message: "Email or Password not found" });
      // stop further execution in this callback
      return;
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

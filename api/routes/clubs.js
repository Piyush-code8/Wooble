const router = require("express").Router();
const Club = require("../models/Club")

router.get("/", async(req, res) => {
    try {
      const club = await Club.find();
      res.status(200).json(club);
    } catch (err) {
      res.status(500).json(err)
    }
  })

module.exports = router;
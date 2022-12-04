const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      max: 500,
    },
    name: {
      type: String,
    },
    img: {
        type: String,
      },
    members: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Club", ClubSchema);

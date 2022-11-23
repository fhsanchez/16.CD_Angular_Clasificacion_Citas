const mongoose = require("mongoose");

// Creacion del esquema
const QuoteRanksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      minLength: [3, "name must have more than three characters"],
    },
    quotes: [
      {
        description: {
          type: String,
          minLength: [3, "quote must have more than three characters"],
        },

        rank: {
          type: Number,
          default: 0,
        },
      },
    ],
  },

  { timestamps: true }
);

// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const QuoteRanks = mongoose.model("QuoteRanks", QuoteRanksSchema);

module.exports = QuoteRanks;

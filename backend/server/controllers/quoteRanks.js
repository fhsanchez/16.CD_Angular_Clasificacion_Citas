const QuoteRanks = require("../models/quoteRanks");

module.exports = {
  getQuoteByAuthor: function (req, res) {
    QuoteRanks.findOne({ _id: req.params.id })
      .then((quoteRanks) => res.json(quoteRanks))
      .catch((err) => res.json(err));
  },


  new : async (request, response) => {
    let id_autor = request.params.id;
    let _description = request.body.description;

    console.log("request.params.id: " + request.params.id);
    console.log("request.body.description: " + request.body.description);

    QuoteRanks.updateOne(
      { _id: id_autor },
      {
        $push: {
          quotes: { description: _description, rank: 0 },
        },
      }
    )
      .then((data) => response.json(data))
      .catch((err) => {
        response.status(404).json({ error: err.message });
      });
  },

  addrank: function (req, res) {
    let id_author = req.params.id;
    let id_quote = req.body.id_quote;
    let rank = req.body.rank;

    console.log("id_author: " + id_author);
    console.log("id_quote: " + id_quote);
    console.log("rank: " + rank);

 
    QuoteRanks.updateOne(
      {
        _id: id_author,
        quotes: { $elemMatch: { _id: id_quote } },
      },
      { $set: { "quotes.$.rank": rank } }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(404).json({ error: err.message });
      });
  },


  delete: function (req, res) {
    let id_author = req.params.id;
    let id_quote = req.body.id_quote;
    //console.log("req.params.id: " + req.params.id);
    //console.log("req.body.id_quote: " + req.body.id_quote);
    QuoteRanks.findByIdAndUpdate(id_author, {
      $pull: {
          quotes: {
              _id: id_quote
          }
      }
  })  
      // .then((deletedQuote) => res.json(deletedQuote))
      // .catch((err) => res.json(err));
      .then(deletedQuote => res.status(200).json({ message: "Success", deletedQuote }))
      .catch(error => res.status(500).json({ message: "Fail", error }));
  },

  
};

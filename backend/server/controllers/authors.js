const Author = require("../models/quoteRanks");

module.exports = {
  getAll: function (req, res) {
    Author.find()
      .then((author) => res.json(author))
      .catch((err) => res.json(err));
  },  
  
  getById: function (req, res) {
    Author.findOne({ _id: req.params.id })
      .then((author) => res.json(author))
      .catch((err) => res.json(err));
  },

  new: function (req, res) {
    const author = new Author();    
    author.name = req.body.name;    
    author.save()
      .then((newAuthor) => { 
        console.log(newAuthor)
        res.json(newAuthor)}
      )
      .catch((err) => console.log(err));
  },

  edit: async function (req, res) {   
    const id = req.params.id;
    const body = req.body;
    const data =  Author.updateOne({ _id: id } , body )
      .then((author) => res.json( { message : "success",  author }))
      .catch((err) => res.json( { message : "fault",  error  : err}));
  },

  delete: function (req, res) {
    let id = req.params.id;
    Author.deleteOne({ _id: id })
      .then((deletedAuthor) => res.json(deletedAuthor))
      .catch((err) => res.json(err));
  },

};
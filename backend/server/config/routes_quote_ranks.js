const { new2 } = require("../controllers/quoteRanks");
const quoteRanks = require("../controllers/quoteRanks");

module.exports = function(app){
  
  // 1. Devuelve Quotes por Author
  app.get("/quoteranks/:id", (req, res) => {
    quoteRanks.getQuoteByAuthor(req, res);
  });

   // 2.Agrega una Quote  SIN Rank
   app.put("/quoteranks/:id", (req, res) => {
    quoteRanks.new(req, res);
  });    
  
  // 3. Actualiza una Quote Rank
  app.put("/addquoteranks/:id", (req, res) => {
    quoteRanks.addrank(req, res);
  }); 
  
  // 4. Elimina una Quote
  app.delete("/quoteranks/:id", (req, res) => {
    quoteRanks.delete(req, res)
  });
}
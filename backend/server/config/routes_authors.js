const authors = require("../controllers/authors");
const quoteRanks = require("../controllers/quoteRanks");

module.exports = function(app){

// 1. Devuelve todos los Authors
app.get("/authors", (req, res) => {   
    authors.getAll(req, res);
  });
  
  // 2. Devuelve una Author por Id
  app.get("/authors/:id", (req, res) => {
    authors.getById(req, res);
  });
  
  // 3. Agrega una Author
  app.post("/authors", (req, res) => {
    authors.new(req, res);
  });
  
  // 4. Edita los datos de un Author
  app.put("/authors/:id", (req, res) => {      
    authors.edit(req, res);
  });
  
  // 5. Elimina un Author
  app.delete("/authors/:id", (req, res) => {
      authors.delete(req, res)
  });

}
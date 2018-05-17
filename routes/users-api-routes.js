var db = require("../models");

module.exports = function(app) {
  app.get("/api/User", function(req, res) {
    // Display all users
    
    db.User.findAll({
      // include: [db.Post]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/User/:id", function(req, res) {
    // Find onhand items for selected user
    
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.ItemList]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/User/:id", function(req, res) {
    // Add item to our wish list in our findOne query for selected user
    
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.ItemList]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/User", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

   // PUT route for updating posts
   app.put("/api/User/:id", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbUser);
    });
  });

  app.delete("/api/User/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};

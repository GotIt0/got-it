// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the ItemList
  app.get("/api/items", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.ItemList.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Get route for retrieving a single ItemList
  app.get("/api/items/:UserId", function(req, res) {
   
    db.ItemList.findOne({
      where: {
        UserId: req.params.id
      },
      include: [db.User]
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // ItemList route for saving a new ItemList
  app.post("/api/items", function(req, res) {
    db.ItemList.create(req.body).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // DELETE route for deleting ItemList
  app.delete("/api/items/:UserId", function(req, res) {
    db.ItemList.destroy({
      where: {
        UserId: req.params.id
      }
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // PUT route for updating ItemList
  app.put("/api/items", function(req, res) {
    db.ItemList.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbItems) {
      res.json(dbItems);
    });
  });
};

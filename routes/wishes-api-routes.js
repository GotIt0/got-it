
/*
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var scrape = require("../controllers/scrape");
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the WishList
  app.get("/api/wishes", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    
    db.WishList.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbWishes) {
      res.json(dbWishes);
    });
  });

  // Get route for retrieving a single WishList
  app.get("/api/wishes/:id", function(req, res) {
   
    db.WishList.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbWishes) {
      res.json(dbWishes);
    });
  });

  // WishList route for saving a new WishList
  app.post("/api/wishes", function(req, res) {

    var url = req.body.url;
    var info = getInfo(url);

    db.WishList.create(req.body).then(function(dbWishes) {
      res.json(dbWishes);
    });
  });

  // DELETE route for deleting WishList
  app.delete("/api/wishes/:id", function(req, res) {
    db.WishList.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbWishes) {
      res.json(dbWishes);
    });
  });

  // PUT route for updating WishList
  app.put("/api/wishes", function(req, res) {
    db.WishList.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbWishes) {
      res.json(dbWishes);
    });
  });
};
*/
var db = require("../models");

module.exports = function(app) {
  // Display all on hand items
  app.get("/api/Category", function(req, res) {
    db.Category.findAll({
      include: [db.ItemList]
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.get("/api/Category", function(req, res) {
    // Display all on wish list items
    db.Category.findAll({
      include: [db.WishList]
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.get("/api/Category/:id", function(req, res) {
    // Display one category
    db.Category.findOne({
      where: {
        id: req.params.id
      },
      include: [db.ItemList.item_name],
      include: [db.WishList.item_name],
      include: [db.User.name]
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.post("/api/Category", function(req, res) {
    db.Category.create(req.body).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  // PUT route for updating posts
  app.put("/api/Category", function(req, res) {
    db.Post.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbCategory);
    });
  });

  app.delete("/api/Category/:id", function(req, res) {
    db.Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });
};

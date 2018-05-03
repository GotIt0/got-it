module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    // Giving the Category model a name of type STRING
    product_category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    budget: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  });

  Category.associate = function(models) {
    // Associating Category with Posts
    // When an Category is deleted, also delete any associated Posts
    Category.hasMany(models.ItemsOnHand, {
      // onDelete: "cascade"
    });
  };

  return Category;
};

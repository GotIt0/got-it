module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    budget: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    }
  });

  User.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.ItemList, {
      onDelete: "cascade"
    });
    
    User.hasMany(models.WishList, {
      onDelete: "cascade"
    });

    // User.hasMany(models.Category, {
    //   // onDelete: "cascade"
    // });
  };

  return User;
};

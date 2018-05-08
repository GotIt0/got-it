module.exports = function(sequelize, DataTypes) {
  var WishList = sequelize.define("WishList", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      len: [1]
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },

    store: {
      type: DataTypes.STRING
    }
  });

  WishList.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    WishList.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });

    WishList.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return WishList;
};

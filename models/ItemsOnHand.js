module.exports = function(sequelize, DataTypes) {
  var ItemsOnHand = sequelize.define("ItemsOnHand", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    product_category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });

  ItemsOnHand.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    ItemsOnHand.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });

  ItemsOnHand.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return ItemsOnHand;
};

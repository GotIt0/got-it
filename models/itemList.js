module.exports = function(sequelize, DataTypes) {
  var ItemList = sequelize.define("ItemList", {
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

  ItemList.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    ItemList.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });

    ItemList.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return ItemList;
};

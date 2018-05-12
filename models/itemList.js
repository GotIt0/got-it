module.exports = function(sequelize, DataTypes) {
  var ItemList = sequelize.define("ItemList", {

    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    product_wish_price: {
      type: DataTypes.INTEGER,
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

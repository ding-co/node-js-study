'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customer.init(
    {
      customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customer_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      employee_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'customer',
    }
  );
  return customer;
};

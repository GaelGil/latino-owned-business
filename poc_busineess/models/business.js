'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Business.hasMany(models.Socialmedia);

      // define association here
    }
  };
  Business.init({
    businessName: DataTypes.STRING,
    adresss: DataTypes.STRING,
    website: DataTypes.STRING,
    shortDescription: DataTypes.TEXT,
    longdescrption: DataTypes.TEXT,
    neighborhood: DataTypes.TEXT,
    city: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Business',
  });
  return Business;
};
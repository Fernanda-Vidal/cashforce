/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
    const OrderPortionModel = sequelize.define(
      'OrderPortion',
      {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        nDup: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        dVenc: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        vDup: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        availableToMarket: {
            defaultValue: 1,
            type: DataTypes.TINYINT,
        },
        orderId: {
            defaultValue: null,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
      },
      {
        createdAt: true,
        updatedAt: true,
        timestamps: true,
        tableName: 'orderPortions',
      },
    );

    OrderPortionModel.associate = (models) => {
        OrderPortionModel.belongsTo(models.Order,
            { foreignKey: 'orderId' });
    };
  
    return OrderPortionModel;
  };
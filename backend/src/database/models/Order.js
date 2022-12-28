/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
    const OrderModel = sequelize.define(
      'Order',
      {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        orderNFId: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        orderNumber: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        orderPath: {
            defaultValue: null,
            unique: true,
            type: DataTypes.STRING,
        },
        orderFileName: {
            defaultValue: null,
            unique: true,
            type: DataTypes.STRING,
        },
        orderOriginalName: {
            defaultValue: null,
            unique: true,
            type: DataTypes.STRING,
        },
        emissionDate: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        pdfFile: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        emitedTo: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        nNF: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        CTE: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        value: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        cnpjId: {
            defaultValue: null,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        userId: {
            defaultValue: null,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        buyerId: {
            defaultValue: null,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        providerId: {
            defaultValue: null,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        orderStatusBuyer: {
            defaultValue: 0,
            type: DataTypes.STRING,
        },
        orderStatusProvider: {
            defaultValue: 0,
            type: DataTypes.STRING,
        },
        deliveryReceipt: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        cargoPackingList: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        deliveryCtrc: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
      },
      {
        createdAt: true,
        updatedAt: true,
        timestamps: true,
        tableName: 'orders',
      },
    );

    OrderModel.associate = (models) => {
        OrderModel.belongsTo(models.CNPJ,
            { foreignKey: 'cnpjId' });

        OrderModel.belongsTo(models.User,
            { foreignKey: 'userId' });

        OrderModel.belongsTo(models.Buyer,
            { foreignKey: 'buyerId' });

        OrderModel.belongsTo(models.Provider,
            { foreignKey: 'providerId' });

        OrderModel.hasMany(models.OrderPortion,
            { foreignKey: 'id' });

        OrderModel.hasMany(models.Offer,
            { foreignKey: 'id' });
    };
  
    return OrderModel;
  };
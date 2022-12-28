/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
    const BuyerModel = sequelize.define(
      'Buyer',
      {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        tradingName: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        cashForceTax: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        responsibleName: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        responsibleEmail: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        responsiblePosition: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        responsiblePhone: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        responsibleMobile: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        website: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        postalCode: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        address: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        number: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        complement: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        neighborhood: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        city: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        state: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        phoneNumber: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        situation: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        situationDate: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        cnpjId: {
            defaultValue: null,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        confirm: {
            defaultValue: 1,
            type: DataTypes.TINYINT,
        },
        email: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
      },
      {
        createdAt: true,
        updatedAt: true,
        timestamps: true,
        tableName: 'buyers',
        underscored: true,
      },
    );

    BuyerModel.associate = (models) => {
        BuyerModel.belongsTo(models.CNPJ,
            { foreignKey: 'cnpjId' });
        
        BuyerModel.hasMany(models.Order,
            { foreignKey: 'id' });
    };
  
    return BuyerModel;
  };
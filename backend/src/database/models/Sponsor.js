/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
    const SponsorModel = sequelize.define(
      'Sponsor',
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
        bank: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        bankAgency: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        account: {
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
        email: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
      },
      {
        createdAt: true,
        updatedAt: true,
        timestamps: true,
        tableName: 'sponsors',
      },
    );

    SponsorModel.associate = (models) => {
        SponsorModel.belongsTo(models.CNPJ,
            { foreignKey: 'cnpjId' });

        SponsorModel.hasMany(models.Offer,
            { foreignKey: 'id' });
    };
  
    return SponsorModel;
  };
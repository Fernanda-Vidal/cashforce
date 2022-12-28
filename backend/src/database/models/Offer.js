/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
    const OfferModel = sequelize.define(
      'Offer',
      {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        tax: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        tariff: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        adValorem: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        float: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        iof: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        expiresIn: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        paymentStatusSponsor: {
            defaultValue: 0,
            type: DataTypes.TINYINT,
        },
        paymentStatusProvider: {
            defaultValue: 0,
            type: DataTypes.TINYINT,
        },
        orderId: {
            defaultValue: null,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        sponsorId: {
            defaultValue: null,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
      },
      {
        createdAt: true,
        updatedAt: true,
        timestamps: true,
        tableName: 'offers',
        underscored: true,
      },
    );
  
    OfferModel.associate = (models) => {
      OfferModel.belongsTo(models.Order,
        { foreignKey: 'orderId' });

      OfferModel.belongsTo(models.sponsor,
        { foreignKey: 'sponsorId' });
    };
  
    return OfferModel;
  };
/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
    const CNPJModel = sequelize.define(
      'CNPJ',
      {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        cnpj: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        companyType: {
            allowNull: false,
            type: DataTypes.STRING,
        },
      },
      {
        // createdAt: true,
        // updatedAt: true,
        timestamps: true,
        tableName: 'cnpjs',
      },
    );

    CNPJModel.associate = (models) => {
      CNPJModel.hasMany(models.Buyer, 
        { foreignKey: 'id' });

      CNPJModel.hasMany(models.Provider,
        { foreignKey: 'id' });

      CNPJModel.hasMany(models.Sponsor,
        { foreignKey: 'id' });

      CNPJModel.hasMany(models.Order,
        { foreignKey: 'id' });
    };
  
    return CNPJModel;
  };
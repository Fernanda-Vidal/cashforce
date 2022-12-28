/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
    const UserModel = sequelize.define(
      'User',
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
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        phoneNumber: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        mobile: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        departament: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        verificationcode: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        emailChecked: {
            defaultValue: 0,
            type: DataTypes.TINYINT,
        },
        cashForceAdm: {
            defaultValue: 0,
            type: DataTypes.TINYINT,
        },
      },
      {
        createdAt: true,
        updatedAt: true,
        timestamps: true,
        tableName: 'users',
      },
    );

      UserModel.associate = (models) => {
        UserModel.hasMany(models.Order,
            { foreignKey: 'id' });
      };
  
    return UserModel;
  };
const { Model, DataTypes, Sequelize } = require('sequelize')
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.STRING,
        },
        release_date: {
            type: DataTypes.STRING,
        },
        pc: {
            type: DataTypes.BOOLEAN,
        },
        xbox: {
            type: DataTypes.BOOLEAN,
        },
        nintendo: {
            type: DataTypes.BOOLEAN
        },
        playstation: {
            type: DataTypes.BOOLEAN,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        },        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);

module.exports = Game;
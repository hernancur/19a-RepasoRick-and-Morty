const { DataTypes, UUIDV4, UUID } = require('sequelize')

// 89asd87-8da978-52sgj45-2df14k5

module.exports = (sequelize) => {
    sequelize.define('episode', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: true,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        airDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING
        }
    })
}
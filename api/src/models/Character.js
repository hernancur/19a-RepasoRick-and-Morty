const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('character', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        species: {
            type: DataTypes.STRING,
        },
        origen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            defaultValue: "https://rickandmortyapi.com/api/character/avatar/20.jpeg"
        },
        created: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
}
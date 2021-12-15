const { DataTypes, UUIDV4, UUID } = require('sequelize')

// 89asd87-8da978-52sgj45-2df14k5

module.exports = (sequelize) => {
    sequelize.define('episode', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,            
            primaryKey: true            
        },
        name: {
            type: DataTypes.STRING,
                        
        }
       
    })
}
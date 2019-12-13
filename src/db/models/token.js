module.exports = function (sequelize, DataTypes) {
    const Token = sequelize.define('Token', {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        key: {
            type: DataTypes.STRING,
        }, 
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    });

    Token.associate = models => {
        Token.belongsTo(models.User, { foreignKey: 'user_id' })
    };

    return Token;
};
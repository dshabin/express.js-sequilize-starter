'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Token', {
            id: {
                type: Sequelize.INTEGER(11).UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: Sequelize.INTEGER(11).UNSIGNED,
                references: { model: 'User', key: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },
            key: {
                type: Sequelize.STRING,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },
    down: async queryInterface => {
        await queryInterface.dropTable('Token');
    },
};
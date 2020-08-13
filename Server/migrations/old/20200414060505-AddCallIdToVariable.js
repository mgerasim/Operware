'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Variables', // name of Target model
      'callId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Calls', // name of Source model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Variables', // name of Source model
      'callId' // key we want to remove
    );
  }
};

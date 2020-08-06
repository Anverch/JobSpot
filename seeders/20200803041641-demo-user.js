'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
        name: 'Test This',
        email: 'test@test.com',
        password: "password",
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
    },{
        name: 'Test That',
        email: 'why@whynot.com',
        password: "password",
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

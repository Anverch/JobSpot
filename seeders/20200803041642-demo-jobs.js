'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('jobs', [{
      company: 'Google',
      job_title: 'Software Engineer',
      salary: 250000,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now())
    },{
      company: 'Taco Bell',
      job_title: 'Cashier',
      salary: 28000,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now())
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('jobs', null, {});
  }
};

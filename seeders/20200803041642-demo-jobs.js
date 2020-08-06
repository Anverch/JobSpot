'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user_id = await queryInterface.rawSelect('users', {
      where: {
        email: 'test@test.com',
      },
    }, ['id']);

    if (user_id){
      await queryInterface.bulkInsert('jobs', [{
        user_id: user_id,
        company: 'Google',
        job_title: 'Software Engineer',
        salary: 250000,
        status: "Pending",
        notes: "I really like this one",
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      },{
        user_id: user_id,
        company: 'Taco Bell',
        job_title: 'Cashier',
        salary: 28000,
        status: "Active",
        notes: "Ryan was here",
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      }], {});
    }
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('jobs', null, {});
  }
};

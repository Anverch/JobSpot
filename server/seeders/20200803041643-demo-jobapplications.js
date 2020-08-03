'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const job_id = await queryInterface.rawSelect('jobs', {
      where: {
        company: 'Google',
      },
    }, ['id']);

    if (job_id){
      await queryInterface.bulkInsert('jobapplications', [{
        status: 'Pending',
        notes: 'I want this job',
        job_id: job_id,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      }], {})
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('jobapplications', null, {});
  }
};

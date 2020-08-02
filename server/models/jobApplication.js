'use strict';
module.exports = (sequelize, DataTypes) => {
    const jobApplication = sequelize.define(
        'jobApplication',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            status: DataTypes.STRING,
            notes: DataTypes.STRING,
            // Job_id is foreign key, referencing jobs.js
            job_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'jobs',
                    key: 'id'
                }
            }
        }
    );
    return jobApplication;
};
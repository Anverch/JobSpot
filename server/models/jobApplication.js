'use strict';
module.exports = (sequelize, DataTypes) => {
    const jobApplication = sequelize.define(
        'jobApplication',
        {
            id: DataTypes.INTEGER,
            status: DataTypes.STRING,
            notes: DataTypes.STRING,
            // Job_id is foreign key, referencing jobs.js
            job_id: {
                references: "jobs",
                referencesKey: "id"
            }
        }
    );
    return jobApplication;
};
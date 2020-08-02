'use strict';
module.exports = (sequelize, DataTypes) => {
    const jobs = sequelize.define(
        'jobs',
        {
            id: {
            type: DataTypes.INTEGER,
            primaryKey: true
            }, 
            company: DataTypes.STRING,
            job_title: DataTypes.STRING,
            salary: DataTypes.INTEGER
        }
    )
    return jobs;
};
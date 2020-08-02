'use strict';
module.exports = (sequelize, DataTypes) => {
    const jobs = sequelize.define(
        'jobs',
        {
            id: DataTypes.INTEGER,
            company: DataTypes.STRING,
            job_title: DataTypes.STRING,
            salary: DataTypes.INTEGER
        }
    )
    return jobs;
};
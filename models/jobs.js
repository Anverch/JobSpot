'use strict';
module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define(
        'Job',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            }, 
            company: DataTypes.STRING,
            job_title: DataTypes.STRING,
            salary: DataTypes.INTEGER
            // status: Interested, applied,  ect. (drop down)
        }
    )
    return Job;
};
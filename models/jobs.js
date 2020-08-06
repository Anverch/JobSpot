'use strict';
module.exports = (sequelize, DataTypes) => {
    const Jobs = sequelize.define(
        'jobs',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            
            company: DataTypes.STRING,
            job_title: DataTypes.STRING,
            salary: DataTypes.INTEGER
        }
    );
    Jobs.associate = function (models) {
        // associations can be defined here
        Jobs.belongsTo(models.User, {
            onDelete: "cascade",
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        });
    }
    return Jobs;
};
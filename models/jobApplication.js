// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//     const JobApplication = sequelize.define(
//         'JobApplications',
//         {
//             id: {
//                 type: DataTypes.INTEGER,
//                 autoIncrement: true,
//                 primaryKey: true
//             },
//             status: DataTypes.STRING,
//             notes: DataTypes.STRING,
//             // Job_id is foreign key, referencing jobs.js
//             job_id: {
//                 type: DataTypes.INTEGER,
//                 references: {
//                     model: 'jobs',
//                     key: 'id'
//                 }
//             }
//         }
//     );
//     return JobApplication;
// };
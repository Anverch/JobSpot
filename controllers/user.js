// const db = require("../models")

// module.exports = {
//     getUsers(req, res) {
//         db.User 
//         .findAll()
//         .then(dbUser => res.json(dbUser))
//         .catch(err => res.status(500).json(err))
//     },
//     getUser(req, params) {
//         const id = req.params.id;
//         db.User 
//         .findOne({
//             where: { id: id }
//         })
//         .then(dbUser  => res.json(dbUser))
//         .catch(err=> res.status(500).json(err))
//     },
// }
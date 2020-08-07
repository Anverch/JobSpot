const db = require("../models");

module.exports = {
    getUsers(req, res) {
        db.User
            .findAll()
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(500).json(err))
    },
    getUser(req, params) {
        const id = req.params.id;
        db.User
            .findOne({
                where: { id: id }
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(500).json(err))
    },
    createUser(req, res) {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(500).json(err));
    },
    updateUser(req, res) {
        db.User
            .update({
                name: req.body,
                email: req.body,
                password: req.body
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(500).json(err));
    
},
    deleteUser(req, params) {
    const id = req.params.id;
    db.User
        .destroy({
            where: {
                id: id
            }
        }).then(function (dbUser) {
            res.json(dbUser)
        })
},
    login(req, res) {
        db.User
        .findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        .then(function(dbUser) {
            res.json(dbUser);
        })
        .catch(err => res.status(500).json(err));
    }
}
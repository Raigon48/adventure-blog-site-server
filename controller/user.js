const User = require('../model/user');

exports.getAddUser = (req, res, next) => {
    res.render('addUser');
}

exports.createUser = (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    
    const user = new User(username, email);

    user
        .save()
        .then(response => {
            console.log(response.ops);
        })
        .catch(error => {
            console.log(error);
        });
}


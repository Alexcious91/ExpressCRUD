// In memory database
const users = [];

exports.getAllUsers = (req, res) => {
    res.render('home', { users });
}

exports.getAddUserForm = (req, res) => {
    res.render('add');
}

exports.addUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: Math.floor(Math.random() * 2000),
        name: name,
        email: email
    }

    users.push(newUser);
    console.log(users)
    res.redirect('/success');
}

exports.editUser = (req, res) => {
    const { name } = req.body
    const userIndex = users.findIndex(user => name == user.name)
    users[userIndex].name = name;
}






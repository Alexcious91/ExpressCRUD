const express = require('express');
const router = express.Router();
// const userController = require('../controllers/mainController')
// router.get('/', userController.getAllUsers);
// router.post('/add-user', userController.addUser)

const userList = [];

router.get('/', (req, res) => {
    res.render('home', { userList })
});

router.get('/success', (req, res) => {
    res.render('success');
});

// Get add user form
router.get('/add-user', (req, res) => { 
    res.render('add');
});

router.post('/add-user', (req, res) => {
    const { name, email } = req.body;

    const existingUser = userList.find((user) => user.email === email)
    if (existingUser) {
        return res.status(400).render('./failureAddingUser')
    }
    
    const newUser = {
        id: Math.floor(Math.random() * 2000),
        name: name,
        email: email
    }

    userList.push(newUser);
    console.log(userList)
    res.redirect('/success');
}); 

module.exports = router;
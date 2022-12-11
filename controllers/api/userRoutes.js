const router = require('express').Router();
const { Users } = require('../../models');



//get all users
router.get('/users', async (req, res) => {
    try {
        const userData = await Users.findAll({

        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json (err)
    }
})
//create new user  
router.post('/signup', async (req, res) => {
    try {
        const newUser = await Users.create({
            user_name: req.body.user_name,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(newUser)
        })

    } catch (err) {
        res.status(500).json (err);
    } 
})


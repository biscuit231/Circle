const router = require('express').Router();
const { Users } = require('../../models');

//get all users
router.get('/', async (req, res) => {
    try {
        const userData = await Users.findAll({

        });
        console.log(userData);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json (err)
    }
})
//create new user  
router.post('/', async (req, res) => {
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

//login
router.post('/login', async (req, res) => {
    try {
        const userData = await Users.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res 
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            TODO://add user id to session, need to check if i can use user_id from model?
            req.session.user_id = userData.id;
            res 
                .status(200)
                .json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) { 
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;

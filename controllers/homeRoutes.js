const router = require('express').Router();
const { Posts, Users} = require('../models');
//const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll({
            include: [
                {
                    model: Users,
                    attributes: ['user_name'],
                }

,            ]
        });
    
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
    
        res.render('homepage', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
    })

    module.exports = router;
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
            },
          ],
});
    console.log(postData);
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
    
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        } );

    } catch (err) {
        res.status(500).json(err);
    }
    })



//get posts by pk
router.get('/posts/:id', async (req, res) => {
    try {
        const postData = await Posts.findByPk(req.params.id);
        const post = postData.get({ plain: true });
        console.log(post);
        res.render('post', {
            post, 
            logged_in: req.session.logged_in
        });
    } catch (err) { 
        res.status(500).json(err);
    }
});


  module.exports = router;
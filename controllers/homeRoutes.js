const router = require('express').Router();
const { Posts, Users} = require('../models');
//const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll({
          
});
    console.log(postData);
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
    
        res.render('homepage', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
    })



//get posts by pk
router.get('/posts/:id', async (req, res) => {
    try {
        const postData = await Posts.findByPk(req.params.id);
        // const post = postData.map((post) => post.get({ plain: true }));
        const post = postData.get({ plain: true });
        console.log(post);
        res.render('post', {post});
    } catch (err) { 
        res.status(500).json(err);
    }
});


  module.exports = router;
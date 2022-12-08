const router = require('express').Router();
const { Posts, Users, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll({
        });
    
        const posts = postData.map((post) => post.get({ plain: true }));
    
        res.render('homepage', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
    })
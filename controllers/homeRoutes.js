const router = require('express').Router();
const { Posts, Users} = require('../models');
//const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll({
});
    
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
    
        res.render('homepage', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
    })


  TODO: //   cannot get route by ID
// get post by id
router.get('/posts/:id', async (req, res) => {
  try {
    // Find the post by its ID
    const post = await Posts.findByPk(req.params.id);

    // If the post was found, render the post page with the post data
    if (post) {
      res.render('post', {
        post
      });
    } else {
      // If the post was not found, send a 404 Not Found error
      res.status(404).send('Post not found');
    }
  } catch (err) {
    // If there was an error querying the database, send a 500 Internal Server Error response
    res.status(500).send(err);
  }
});

  module.exports = router;
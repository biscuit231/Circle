const router = require('express').Router();
const { Posts } = require('../../models');

// Show all Posts
router.get('/', async (req, res) => {
    try {
        const userData = await Posts.findAll({
            order: [post_date, 'DESC']
        });
        

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json (err)
    }
})



// Create Post
router.post('/create', async (req, res) => {
    try {
        const newPost = await Posts.create({
            ...req.body,
            users_id: req.session.user_id
        });
  
        res.status(200).json(newPost);
        //res.render('homepage', {newPost});
    } catch (err) {
        res.status(500).json (err)
    }
})

// Edit Post
router.put('/:id', async (req, res) => {
    try {
        const oldPost = await Posts.update(req.body, {
            where: {post_id: req.params.id}
        })

        res.status(200).json("Post updated");
        //res.render('homepage', {updatePost});
    } catch (err) {
        res.status(500).json (err)
    }
})

// Delete Post
router.delete('/:id', async (req, res) => {
    try {
        const deletePost = await Posts.findByPk(req.params.id)

        deletePost.destroy();

    
        res.status(200).json(deletePost);
    } catch (err) {
        res.status(500).json (err)
    }
})


module.exports = router;
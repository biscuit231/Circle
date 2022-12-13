const router = require('express').Router();
const { Posts } = require('../../models');

// Show all Posts
router.get('/', async (req, res) => {
    try {
        const userData = await Posts.findAll({
        });
        
        console.log(userData);
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
         //user_id: req.session.user_id
        });
        console.log(newPost);
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
            where: {id: req.params.id}
        })
        // const updatePost = await oldPost.update({
        //     post_title: req.body.post_title,
        //     post_body: req.body.post_body
        // })

        console.log(oldPost);
        res.status(200).json(oldPost);
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

        console.log(deletePost);
        res.status(200).json(deletePost);
    } catch (err) {
        res.status(500).json (err)
    }
})


module.exports = router;
const router = require('express').Router();
const { Replys } = require('../../models');

// Show all Replys
router.get('/', async (req, res) => {
    try {
        const userData = await Replys.findAll({
        });
        

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json (err)
    }
})


// Create Reply
router.post('/create', async (req, res) => {
    try {
        const newReply = await Replys.create({
         ...req.body,
            user_id: req.session.user_id
        });
   
        res.status(200).json(newReply);
        //res.render('homepage', {newReply});
    } catch (err) {
        res.status(500).json (err)
    }
})

// Edit Reply
router.put('/:id', async (req, res) => {
    try {
        const oldReply = await Replys.update(req.body, {
            where: {post_id: req.params.id}
        })

    
        res.status(200).json("Post updated");
        //res.render('homepage', {oldReply});
    } catch (err) {
        res.status(500).json (err)
    }
})

// Delete Reply
router.delete('/:id', async (req, res) => {
    try {
        const deleteReply = await Replys.findByPk(req.params.id)

        deleteReply.destroy();

        res.status(200).json(deleteReply);
    } catch (err) {
        res.status(500).json (err)
    }
})


module.exports = router;
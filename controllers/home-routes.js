const router = require('express').Router();
const { Post, Comment } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
        // attributes: ['id'],
        
          attributes: ['title', 'content', 'created_date', 'created_by'],
        },
      
    );

    const posts = dbPostData.map((blog) =>
      blog.get({ plain: true })
    );

    // res.render('homepage', {
        res.render('homepage', {
      posts,
    });
  } catch (err) {
    console.log(err & "here is the error");
    res.status(500).json(err);
  }
});




// GET one post
router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'title',
            'content',
            'created_date',
            'created_by',
          ],
        },
      ],
    });

    const post = dbPostData.get({ plain: true });
    res.render('post', { post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;

const router = require('express').Router();
const { Post, Comment } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
        attributes: ['id'],
        
        //   attributes: ['title', 'content', 'created_date', 'created_by'],
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

// router.get('/', async (req, res) => {
//   // Add a comment describing the purpose of the render method
//   // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
//   res.render('homepage');
// });



// router.get('/', function (req, res) {
//     res.render('homepage', {});
//   });



// // GET one gallery
// router.get('/gallery/:id', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     res.render('gallery', { gallery });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

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

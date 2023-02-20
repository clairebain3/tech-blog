const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/new', async (req, res) => {
  if (!req.session.user_id) {
    res.render('login')

    return;
  }
  try {
    const newComment = await Comment.create({
      ...req.body,
      created_by: req.session.user_id, 

    });



    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
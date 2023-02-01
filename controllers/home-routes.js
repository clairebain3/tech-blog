const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      // attributes: ["title", "content", "created_date", "created_by", "id"],
    });

    const posts = dbPostData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err & "here is the error");
    res.status(500).json(err);
  }
});

// GET one post
router.get("/post/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      // const dbPostData = await Post.findByPk(id, {

      attributes: ["title", "content", "created_date", "created_by", "id"],
    });

    const postdet = dbPostData.get({ plain: true });
    res.render("post", { postdet,
      logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  res.render('login')
})


// get user's posts for dashboard
router.get("/dashboard", async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id,{
      attributes: { exclude: ['password'] },
      include: [ {model: Post }],
    });

    const user = dbUserData.map((blog) => blog.get({ plain: true }));

    res.render("dashboard", {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err & "here is the error");
    res.status(500).json(err);
  }
});



module.exports = router;

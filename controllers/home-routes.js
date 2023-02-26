const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [ {model: User }],
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



// GET one post // i need to get all the comments as well
router.get("/post/:id", async (req, res) => {
  console.log(Post.created_by)
   
  try {
    console.log(req.params)
    const dbPostData = await Post.findByPk(req.params.id,{
// where: {
//         post_id: req.params.id,


      
//       },
      include: [User, {model: Comment, include: [User] }],
      include: [User, Comment, {model: Comment, include: [User] }],
    // const dbPostData = await Post.findByPk(req.params.id, {
  
      // const dbPostData = await Post.findByPk(id, {

      // attributes: ["title", "content", "created_date", "created_by", "id"],
      // include: [{ model: Post }],
    });
    // const comment = dbCommentData.map((blog) => blog.get({ plain: true }));
    const postdet = dbPostData.get({ plain: true });
    console.log(postdet)
    res.render("post", { postdet,
      logged_in: req.session.logged_in,
     user_id: req.session.user_id});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/mypost/:id", async (req, res) => {
  console.log(Post.created_by)
   
  try {
    console.log(req.params)
    const dbPostData = await Post.findByPk(req.params.id,{

      include: [User, {model: Comment, include: [User] }],
      include: [User, Comment, {model: Comment, include: [User] }],

    });

    const postdet = dbPostData.get({ plain: true });
    console.log(postdet)
    res.render("mypost", { postdet,
      logged_in: req.session.logged_in,
     user_id: req.session.user_id});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




router.get('/login', async (req, res) => {
  res.render('login')
})

// get user's posts for dashboard
// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  // router.get('/dashboard', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.get('/logout', async (req, res) => {
//   res.render('login/')
// })



router.get('/createpost', async (req, res) => {
  res.render('newpost')
})

// router.get('/createcomment', async (req, res) => {
//   res.render('newcomment')
// })
module.exports = router;

router.get('/editpost/:id', async (req, res) => {
  res.render('editpost')
})
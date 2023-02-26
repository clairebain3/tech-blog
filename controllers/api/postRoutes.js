const router = require("express").Router();
const { Post } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      created_by: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // if (!req.session.user_id === req.params.id) {
  //   res.render('login')

  //   return;
  // }
  try {
    const [updatedData] =  await  Post.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    if(updatedData > 0){
      res.status(200).end();
    }else{
      res.status(404).end();
    }
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async ({ body, params }, res) => {
  try {
    const [updatedData] =  await  Post.destroy({
      where: {
        id: params.id
      }
    })

    if(updatedData > 0){
      res.status(200).end();
    }else{
      res.status(404).end();
    }
    
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

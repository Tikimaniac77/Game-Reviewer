const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/game/:id', withAuth, async (req, res) => {
    // try {
    //     const newComment = await Comment.create({
    //         ...req.body,
    //         userID: req.session.userID,
    //     });
    //     res.status(200).json(newComment);
    //     console.log(newComment);
    // } catch (err) {
    //     res.status(400).json(err);
    // }
    const body = req.body;
  console.log(body);
  try {
    const newComment = await Comment.create({ ...body, userId: req.session.userId });
    console.log("Here is the new post: ", newComment);
    res.json(newComment);
  } catch (err) {
    console.log("IT FAILED!", err);
    res.status(500).json(err);
  }
});

module.exports = router;
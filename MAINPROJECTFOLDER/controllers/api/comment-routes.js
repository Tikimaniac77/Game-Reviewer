const router = require("express").Router();
const { Comment, Game } = require("../../models");
const withAuth = require("../../utils/auth");
const fs = require('fs');

// router.get("/api/game:id", async (req, res) => {
//   const gameID = await Game.findByPk(req.body);
//   if (gameID === null){
//   console.log(`Not Found`);
// } else {
//   //console.log(gameId);
//   return gameID
// }});



router.post("/", withAuth, async (req, res) => {


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

  //console.log(gameIdGrab)
  const body = req.body;
  //console.log(body);


  
  try {
    let url = req.headers.referer;
    let stuff = url.split('/');
    let grabGameId = stuff[stuff.length-1]
    let realGameId = parseInt(grabGameId)
    console.log(`===========${realGameId}============`);

    const newComment = await Comment.create({
      ...body,
      userId: req.session.userID,
      gameId: realGameId
    });
    
    
    res.json(newComment);
    const commentTry = newComment.get({ plain: true })
    // const commentTry = newComment.map((r) => {
    //   const commentClean = r.get({ plain: true })
    //   return commentClean
    // })
    console.log(req.params)
    console.log(commentTry)
    
  } catch (err) {
    console.log("IT FAILED!", err);
    res.status(500).json(err);
  }
});

module.exports = router;

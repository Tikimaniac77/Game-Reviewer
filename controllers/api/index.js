const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const gameRoutes = require("./game-routes.js");
const platformRoutes = require("./platform-routes.js");
const commentRoutes = require("./comment-routes.js");

router.use("/users", userRoutes);
router.use("/games", gameRoutes);
router.use("/platform", platformRoutes);
router.use("/comment", commentRoutes);

module.exports = router;

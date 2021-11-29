// const router = require('express').Router();
// const passport = require('passport');

// // Auth Login
// // router.get('login', (req, res) => {
// //     res.render('login');
// // })

// // router.get('/logout', (req, res) => {
// //   console.log('990000000000000000000000000000000000009090909090909090909090')
// //     if (req.session.logged_in) {
// //       req.session.destroy(() => {
// //         res.status(204).end();
// //         res.render('logout');

// //         });

// //       }else {
// //         res.status(404).end();
// //       }

// // })

// router.get("/google", passport.authenticate("google", {
//     scope: ["profile"]
// }));

// // Callback route for google redirect
// router.get('/google/redirect', (req, res) => {

// });

// module.exports = router;

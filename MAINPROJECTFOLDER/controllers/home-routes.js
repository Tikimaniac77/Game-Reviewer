const router = require('express').Router();
const { Game, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        const gameData = await Game.findAll({
            include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],
        });
        

        const games = gameData.map((game) => game.get({ plain: true}));
        //console.log(games)
        res.render('homepage', {
            games,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/game/:id', async (req, res) => {
    try {
      const gameData = await Game.findByPk(req.params.id, {
        include: [
          {
            model: User, 
            attributes: ['name'],
          },
        ],
      });
      const yo = req.params.id

      const commentData = await Comment.findAll({
        where: {
          game_id: yo
        },
        include: [User],
      });
  
      //console.log(psData);
      
      const commentTry = commentData.map((r) =>{
        const commentClean = r.get({ plain: true });

        return commentClean     
  
      })
      console.log(commentTry)

  
      const game = gameData.get({ plain: true });
  
      res.render('game', {
        commentTry,
        ...game,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.userID, {
        attributes: { exclude: ['password'] },
        include: [{ model: Project }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

//     router.get('/logout', (req, res) => {
//     if (req.session.logged_in) {
//         req.session.destroy(() => {
//           res.status(204).end();
          
//         });
        
        
//       }else {
//         res.status(404).end();
//       }

// });

router.get('/platform/playstation', async (req, res) => {
  // console.log('=======platform========')
  // console.log(req.params.platform)
  try {
    const psData = await Game.findAll({
      //MAKE MORE WHERE STATEMENTS TO SPECIFY EACH PLATFORM OR FIND A MORE EFFICIENT WAY TO ROUTE
      where: {
        playstation: true
      }
    });

    //console.log(psData);
    console.log('ran playstation');
    
    const psTry = psData.map((r) =>{
      const psClean = r.get({ plain: true });
      return psClean     

    })
    //console.log(psTry)

    
    res.render('platform', {
      psTry,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/platform/pc', async (req, res) => {
  // console.log('=======platform========')
  // console.log(req.params.platform)
  try {
    const pcData = await Game.findAll({
      //MAKE MORE WHERE STATEMENTS TO SPECIFY EACH PLATFORM OR FIND A MORE EFFICIENT WAY TO ROUTE
      where: {
        pc: true
      }
    });

    //console.log(psData);
    console.log('ran pc');
    
    const pcTry = pcData.map((r) =>{
      const pcClean = r.get({ plain: true });
      return pcClean     

    })
    //console.log(pcTry)

    
    res.render('platform', {
      pcTry,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


router.get('/platform/xbox', async (req, res) => {
  // console.log('=======platform========')
  // console.log(req.params.platform)
  try {
    const xboxData = await Game.findAll({
      //MAKE MORE WHERE STATEMENTS TO SPECIFY EACH PLATFORM OR FIND A MORE EFFICIENT WAY TO ROUTE
      where: {
        xbox: true
      }
    });

    //console.log(psData);
    console.log('ran xbox');
    
    const xboxTry = xboxData.map((r) =>{
      const xboxClean = r.get({ plain: true });
      return xboxClean     

    })
    //console.log(xboxTry)

    
    res.render('platform', {
      xboxTry,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


router.get('/platform/nintendo', async (req, res) => {
  // console.log('=======platform========')
  // console.log(req.params.platform)
  try {
    const nintendoData = await Game.findAll({
      //MAKE MORE WHERE STATEMENTS TO SPECIFY EACH PLATFORM OR FIND A MORE EFFICIENT WAY TO ROUTE
      where: {
        nintendo: true
      }
    });

    //console.log(psData);
    console.log('ran nintendo');
    
    const nintendoTry = nintendoData.map((r) =>{
      const nintendoClean = r.get({ plain: true });
      return nintendoClean     

    })
    //console.log(nintendoTry)

    
    res.render('platform', {
      nintendoTry,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

// router.get('/game/:id', withAuth, async (req, res) => {

//   try {

//       const commentData = await Comment.findAll({
//         include: [User],
//       });
  
//       //console.log(psData);
//       console.log('============comment==============');
      
//       const commentTry = commentData.map((r) =>{
//         const commentClean = r.get({ plain: true });
//         return commentClean     
  
//       })
//       console.log(commentTry)

//       res.render('game', {
//           commentTry,
//           logged_in: req.session.logged_in
//       });
  
      
//       // res.render('platform', {
//       //   pcTry,
//       //   logged_in: req.session.logged_in
//       // });
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

module.exports = router;
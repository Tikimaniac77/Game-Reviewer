const sequelize = require('../config/connection');
const { User, Game, Comment } = require('../models');

const userData = require('./userData.json');
const gameData = require('./gameData.json');
const commentData = require('./commentData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const game of gameData) {
    await Game.create({
      ...game,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment
    });
    
  }

  process.exit(0);
};

seedDatabase();
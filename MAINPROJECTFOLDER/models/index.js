const User = require('./user');
const Game = require('./game');

User.hasMany(Game, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  
  Game.belongsTo(User, {
    foreignKey: 'userId'
  });

module.exports = { User, Game };
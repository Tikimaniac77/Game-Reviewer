const User = require('./user');
const Game = require('./game');
const Comment = require('./comment')

User.hasMany(Game, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  
  Game.belongsTo(User, {
    foreignKey: 'userId'
  });

  User.hasMany(Comment, {
    foreignKey: 'userId'
  });

  Game.hasMany(Comment, {
    foreignKey: 'gameId'
  })

  Comment.belongsTo(User, {
    foreignKey: 'userId'
  });

  Comment.belongsTo(Game, {
    foreignKey: 'gameId'
  });

module.exports = { User, Game, Comment };
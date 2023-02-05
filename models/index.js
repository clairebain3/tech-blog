const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Post, {
  foreignKey: 'created_by'
});

Post.belongsTo(User, {
  foreignKey: 'created_by'
});



module.exports = { User, Post, Comment };
//import models
const Users = require('./Users');
const Communities = require('./Communities');
const Posts = require('./Posts');
const Replys = require('./Replys');
//const Files = require('./Files');
//const Friends = require('./Friends');


Posts.belongsTo(Communities, {
  foreignKey: 'Communities_id'
});
Communities.hasMany(Posts, {
  foreignKey: ''
});


Replys.belongsTo(Posts, {
  foreignKey: 'post_replys'
});
Posts.hasMany(Replys, {
  foreignKey: 'replys_id'
});


Posts.belongsTo(Users, {
  foreignKey: ''
});
Users.hasMany(Posts, {
  foreignKey: ''
});


Replys.belongsTo(Users, {
  foreignKey: ''
});
Users.hasMany(Replys, {
  foreignKey: ''
});


Communities.hasOne(Users, {
  foreignKey: ''
});
Users.hasMany(Communities, {
  foreignKey: ''
});


module.exports = {
    Users,
    Communities,
    Posts,
    Replys,
   // Files,
    //Friends,
  };
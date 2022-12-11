//import models
const Users = require('./Users');
// const Communities = require('./Communities');
// const Posts = require('./Posts');
//const Replys = require('./Replys');
//const Files = require('./Files');
//const Friends = require('./Friends');


// Posts.belongsTo(Communities, {
//   foreignKey: 'communities_id'
// });
// Communities.hasMany(Posts, {
//   foreignKey: 'post_id'
// });


// Replys.belongsTo(Posts, {
//   foreignKey: 'post_replys'
// });
// Posts.hasMany(Replys, {
//   foreignKey: 'replys_id'
// });


// Posts.belongsTo(Users, {
//   foreignKey: 'users_id'
// });
// Users.hasMany(Posts, {
//   foreignKey: 'post_id'
// });


// Replys.belongsTo(Users, {
//   foreignKey: ''
// });
// Users.hasMany(Replys, {
//   foreignKey: ''
// });

//user and community relationship
// Communities.hasMany(Users, {
//   foreignKey: 'users_id'
// });

// Users.belongsTo(Communities, {
//   foreignKey: 'communities_id'
// });



module.exports = {
    Users,
    // Communities,
    // Posts,
    //Replys,
   // Files,
    //Friends,
  };
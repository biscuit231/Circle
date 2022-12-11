const sequelize = require('../config/connection');
const { Users, Posts } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // await Posts.bulkCreate(postData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    
    
    password: {
      type: Sequelize.STRING,
    },
    emailphone: {
      type: Sequelize.STRING,
      unique: true,
    },
    
  });

  return Users;
};

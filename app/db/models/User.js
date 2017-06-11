export default function (sequelize, DataTypes) {
  var User = sequelize.define('Todo', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return User
};

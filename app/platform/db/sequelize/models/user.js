/**
 * Created on 1/6/16.
 * @author rankun203
 */

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    phone        : DataTypes.STRING,
    password     : DataTypes.STRING,
    avatarUrl    : DataTypes.STRING,
    name         : DataTypes.STRING,
    gender       : DataTypes.INTEGER,
    birthday     : DataTypes.DATE,
    lastLoginTime: DataTypes.DATE,
    lastLoginIp  : DataTypes.STRING,
    creationTime : DataTypes.DATE,
    updateTime   : DataTypes.DATE,
    status       : DataTypes.INTEGER
  }, {
    associate: function (models) {
      User.hasMany(models.Task);
    }
  });
  return User;
};

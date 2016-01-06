/**
 * Created on 1/6/16.
 * @author rankun203
 */

var userPersistence = require('./usersPersistence');

module.exports.getUser = function* (id) {
  if (!id) throw new Error('id cannot be null');
  return yield userPersistence.getUser(id);
};

module.exports.getUserList = function* (where) {
  return yield userPersistence.getUserList(where);
};

module.exports.saveUser = function* (user) {
  return yield userPersistence.saveUser(user);
};

const { NotFoundError } = require('../errors');

const testUser = (req, res, next) => {
  if (req.user.testUser)
    throw new NotFoundError('Demo user can not perform this action');
  next();
};

module.exports = testUser;

const jwt = require('jsonwebtoken');
const { token: Token } = require('../models');

module.exports.generateTokens = async (payload) => {
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '15s',
  });
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '30s',
  });
  return {
    accessToken,
    refreshToken,
  };
};

module.exports.saveToken = async (userId, refreshToken) => {
  const foundToken = await Token.findOne({ user: userId });

  /* 
    TODO more devices 
  */

  if (foundToken) {
    const updatedToken = await Token.findByIdAndUpdate(foundToken._id, {
      value: refreshToken,
    });
    return updatedToken;
  }

  const newToken = await Token.create({ user: userId, value: refreshToken });
  return newToken;
};

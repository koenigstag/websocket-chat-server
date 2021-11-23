const _ = require('lodash');
const { generateTokens, saveToken } = require('../services/token');
const bcrypt = require('bcrypt');
const { user: User } = require('../models');

const prepUserForTokens = (body) => _.pick(body, ['_id', 'email', 'role']);
const prepUserToSend = (mongooseInstanse) =>
  _.omit(mongooseInstanse.toJSON(), ['password']);

module.exports.register = async (req, res, next) => {
  try {
    const hashPassword = await bcrypt.hash(
      req.body.password,
      Number(process.env.SALT_ROUNDS)
    );
    const createdUser = await User.create({
      ...req.body,
      password: hashPassword,
    });

    console.log(createdUser.toJSON());

    const preparedUser = prepUserToSend(createdUser);

    const tokenPair = await generateTokens({
      ...prepUserForTokens(preparedUser),
    });
    await saveToken(preparedUser._id, tokenPair.refreshToken);

    res.status(201).send({ tokenPair, data: preparedUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) {
      return res.status(400).send({ error: 'Invalid login or password' });
    }

    const isPassEquals = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );
    if (!isPassEquals) {
      return res.status(400).send({ error: 'Invalid login or password' });
    }

    const preparedUser = prepUserToSend(foundUser);

    const tokenPair = await generateTokens({
      ...prepUserForTokens(preparedUser),
    });
    await saveToken(preparedUser._id, tokenPair.refreshToken);

    console.log(tokenPair);
    res.status(200).send({ tokenPair, data: preparedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
    /* TODO */
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};

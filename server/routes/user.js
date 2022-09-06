const { createEndpoint } = require('../endpoint.js');
const database = require('../database/database.js');
const jsonwebtoken = require('jsonwebtoken');
const config = require('../config.js');
const express = require('express');
const bcrypt = require('bcrypt');
const zod = require('zod');

const userRouter = express.Router();

const registerParamsSchema = zod.object({
  email: zod.string().email(),
  username: zod.string().min(8).max(50),
  password: zod.string().min(8).max(64)
});

userRouter.post(
  '/register',
  createEndpoint(
    registerParamsSchema,
    params =>
      new Promise((resolve, reject) => {
        const passwordHash = bcrypt.hashSync(params.password, 10);

        database.get(
          'INSERT INTO users (email, username, password) VALUES (?, ?, ?) RETURNING id',
          [params.email, params.username, passwordHash],
          (err, result) => {
            if (err || result == null) return reject('');
            const token = jsonwebtoken.sign({ uid: result.id, username: params.username }, config.tokenKey);
            resolve(token);
          }
        );
      })
  )
);

const loginParamsSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8).max(64)
});

userRouter.post(
  '/login',
  createEndpoint(
    loginParamsSchema,
    params =>
      new Promise((resolve, reject) => {
        database.get('SELECT * FROM users WHERE email = ?', [params.email], (err, result) => {
          if (err || result == null) return reject('');
          if (!bcrypt.compareSync(params.password, result.password)) return reject('');
          const token = jsonwebtoken.sign({ uid: result.id, username: result.username }, config.tokenKey);
          resolve(token);
        });
      })
  )
);

module.exports = { userRouter };

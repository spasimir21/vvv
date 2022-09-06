const { createEndpoint } = require('../endpoint.js');
const express = require('express');
const zod = require('zod');

const userRouter = express.Router();

const registerParamsSchema = zod.object({
  email: zod.string().email(),
  username: zod.string().min(8).max(50),
  password: zod.string().min(8).max(64)
});

userRouter.post(
  '/register',
  createEndpoint(registerParamsSchema, async params => {
    return { username: params.username };
  })
);

const loginParamsSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8).max(64)
});

userRouter.post(
  '/login',
  createEndpoint(loginParamsSchema, async params => {
    return { username: params.username };
  })
);

const logoutParamsSchema = zod.object({});

userRouter.post(
  '/logout',
  createEndpoint(logoutParamsSchema, async params => {
    return { username: params.username };
  })
);

module.exports = { userRouter };

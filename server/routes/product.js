const { createEndpoint } = require('../endpoint.js');
const database = require('../database/database.js');
const config = require('../config.js');
const express = require('express');
const zod = require('zod');

const productRouter = express.Router();

const addProductParamsSchema = zod.object({
  name: zod.string(),
  imageUrl: zod.string(),
  expirationDate: zod.number(),
  price: zod.number(),
  barcode: zod.string()
});

const addProductQuery = `
INSERT INTO products (
  name, imageUrl, expirationDate, price, barcode, status, addedDate, userId
) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
RETURNING id
`;

productRouter.post(
  '/add',
  createEndpoint(
    addProductParamsSchema,
    (params, token) =>
      new Promise((resolve, reject) => {
        if (token == null) return reject('Unauthorized');

        database.get(
          addProductQuery,
          [
            params.name,
            params.imageUrl,
            new Date(params.expirationDate),
            params.price,
            params.barcode,
            'active',
            new Date(),
            token.data.uid
          ],
          (err, result) => {
            if (err || result == null) return reject('');
            resolve({ productId: result.id });
          }
        );
      })
  )
);

productRouter.get(
  '/current',
  createEndpoint(
    zod.object({}),
    (params, token) =>
      new Promise((resolve, reject) => {
        if (token == null) return reject('Unauthorized');

        database.all('SELECT * FROM products WHERE userId = ? AND status = "active"', [token.data.uid], (err, result) => {
          if (err || result == null) return reject('');
          resolve({ products: result });
        });
      })
  )
);

productRouter.get(
  '/history',
  createEndpoint(
    zod.object({}),
    (params, token) =>
      new Promise((resolve, reject) => {
        if (token == null) return reject('Unauthorized');

        database.all('SELECT * FROM products WHERE userId = ? AND NOT status = "active"', [token.data.uid], (err, result) => {
          if (err || result == null) return reject('');
          resolve({ products: result });
        });
      })
  )
);

const removeProductParamsSchema = zod.object({
  productId: zod.number(),
  status: zod.enum(['used', 'thrown'])
});

productRouter.delete(
  '/remove',
  createEndpoint(
    removeProductParamsSchema,
    (params, token) =>
      new Promise((resolve, reject) => {
        if (token == null) return reject('Unauthorized');

        database.all(
          'UPDATE products SET status = ?, removeDate = ? WHERE id = ? AND userId = ? AND status = "active"',
          [params.status, new Date(), params.productId, token.data.uid],
          (err, result) => {
            if (err || result == null) return reject('');
            resolve({});
          }
        );
      })
  )
);

const updateProductParamsSchema = zod.object({
  productId: zod.number(),
  expirationDate: zod.number(),
  price: zod.number()
});

productRouter.patch(
  '/update',
  createEndpoint(
    updateProductParamsSchema,
    (params, token) =>
      new Promise((resolve, reject) => {
        if (token == null) return reject('Unauthorized');

        database.all(
          'UPDATE products SET expirationDate = ?, price = ? WHERE id = ? AND userId = ? AND status = "active"',
          [params.expirationDate, params.price, params.productId, token.data.uid],
          (err, result) => {
            if (err || result == null) return reject('');
            resolve({});
          }
        );
      })
  )
);

module.exports = { productRouter };

const jsonwebtoken = require('jsonwebtoken');
const config = require('./config.js');

function createEndpoint(paramsSchema, callback) {
  return (req, res) => {
    const parseResult = paramsSchema.safeParse(req.body);

    if (!parseResult.success) return res.send(JSON.stringify({ success: false, error: 'Invalid request!' }));

    let token = req.headers.token || null;
    if (token != null) {
      try {
        const tokenData = jsonwebtoken.verify(token, config.tokenKey);
        token = { token, data: tokenData };
      } catch (err) {
        res.send(JSON.stringify({ success: false, error: 'Invalid token' }));
        return;
      }
    }

    callback(req.body, token)
      .then(result => res.send(JSON.stringify({ success: true, result })))
      .catch(error => res.send(JSON.stringify({ success: false, error: error.toString() })));
  };
}

module.exports = { createEndpoint };

function createEndpoint(paramsSchema, callback) {
  return (req, res) => {
    const parseResult = paramsSchema.safeParse(req.body);

    if (!parseResult.success) res.send(JSON.stringify({ success: false, error: 'Invalid request!' }));

    callback(req.body, req.headers.token || null)
      .then(result => res.send(JSON.stringify({ success: true, result })))
      .catch(error => res.send(JSON.stringify({ success: false, error: error.toString() })));
  };
}

module.exports = { createEndpoint };

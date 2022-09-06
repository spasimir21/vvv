function createEndpoint(callback) {
  return (req, res) => {
    callback(req.body, req.headers.token || null)
      .then(result => res.send(JSON.stringify({ success: true, result })))
      .catch(error => res.send(JSON.stringify({ success: false, error: error.toString() })));
  };
}

module.exports = { createEndpoint };

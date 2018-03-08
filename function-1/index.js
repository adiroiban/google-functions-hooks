/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.receiveCode = (req, res) => {
  res.send(`Hello ${req.rawBody  || 'World'}!`);
};
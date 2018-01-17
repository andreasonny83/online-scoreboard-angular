// Route Not Found
module.exports = (req, res) => {
  return res.status(404)
  .send({ url: `${req.originalUrl} not found` });
};

module.exports = (req, res) => {
  return res
    .status(200)
    .send({
      name: 'online-scoreboard'
    });
};

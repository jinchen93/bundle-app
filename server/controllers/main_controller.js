module.exports = {
  renderMain(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }
};
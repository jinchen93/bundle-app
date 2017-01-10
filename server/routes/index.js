const ChannelsController = require('../controllers/channels_controller');
const MainController = require('../controllers/main_controller');

module.exports = (app) => {

  app.get('/api/channels', ChannelsController.show);
  app.post('/api/channels', ChannelsController.create);
  app.delete('/api/channels', ChannelsController.deleteAll);
  app.delete('/api/channels/:id', ChannelsController.delete);
  app.get('*', MainController.renderMain);

};
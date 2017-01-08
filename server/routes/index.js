const ChannelsController = require('../controllers/channels_controller');
const MainController = require('../controllers/main_controller');

module.exports = (app) => {

  app.get('/api', ChannelsController.greeting);
  app.get('/api/channels', ChannelsController.show);
  app.post('/api/channels', ChannelsController.create);
  app.get('*', MainController.renderMain);

};
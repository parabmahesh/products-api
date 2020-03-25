import config from '../config/logger'

const SimpleNodeLogger = require('simple-node-logger');

const logger = SimpleNodeLogger.createSimpleLogger(config);
export default logger;

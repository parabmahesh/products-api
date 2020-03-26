import path from 'path';

const logDirectory = path.resolve('logs');
const logFilePath = `${logDirectory}/server.log`;

const config = {
  logFilePath,
  timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
};

export default config;

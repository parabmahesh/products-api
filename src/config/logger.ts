import path from 'path';

const logDirectory = path.resolve('logs');
const logFilePath = `${logDirectory}/server.log`;

console.info('Server log will be written to file, make sure the directory is writable', logDirectory);
const config = {
  logFilePath,
  timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
};

export default config;

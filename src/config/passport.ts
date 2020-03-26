import passport from 'passport';
import logger from '../util/logger';

const passportConfig = function passportConfig(app:any) {
  logger.info('initializing passport!');
  app.use(passport.initialize());
  app.use(passport.session());

  // Store user in session
  passport.serializeUser((user, done) => {
    logger.debug('serializeUser', user);
  });

  // Retreives user from session
  passport.deserializeUser((user, done) => {
    logger.debug('deserializeUser', user);
  });
};

export default passportConfig;

import passport from 'passport';
import { Strategy } from 'passport-local';
import logger from '../util/logger';
import User from '../models/user';

const initializePassport = function initializePassport(app:any) {
  logger.info('initializing passport!');

  passport.use(new Strategy({
    usernameField: 'userName',
    passwordField: 'password'
  }, (userName:String, password:String, done:Function) => {
    console.log('inside strategy callback');
    User.findOne({ userName }, (err:any, user:any) => {
      console.log('found user');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (user.password !== password) { return done(null, false); }
      return done(null, user);
    });
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user:any, cb:any) => {
    console.log('inside serialzeUser callback');
    cb(null, user.id);
  });

  passport.deserializeUser((userName: any, cb:any) => {
    console.log('inside deserializeUser callback');
    User.findOne({ userName }, (err:any, user:any) => {
      console.log('inside deserializeUser callback-1');
      if (err) {
        return cb(err);
      }
      return cb(null, user);
    });
  });

};

export default initializePassport;

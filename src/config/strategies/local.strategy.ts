import passport from 'passport';
import { Strategy } from 'passport-local';

const localStrategy = function localStrategy() {
  passport.use(new Strategy({
    usernameField: 'userName',
    passwordField: 'password'
  }, (userName:String, password:String, done:Function) => {
    console.log('Authenticate the user here!');
    const user = {
      userName,
      password
    };
    done(null, user);
  }));
};

export default localStrategy;

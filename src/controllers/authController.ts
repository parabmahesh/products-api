import passport from 'passport';
import logger from '../util/logger';
import User from '../models/user';

function AuthController() {
  return {
    login: function login(req:any, res:any) {
      console.debug('AuthController', req.body);
      const user = req.body;
      debugger
      passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' });

      req.login(user, () => {
        console.log('Successful login');
      });
      res.json(user);
    },
    signUp: function name(req:any, res:any) {
      logger.info('AuthController-signUp:Creating new user');
      const user = new User(req.body);
      user.save((err:any, _user:any) => {
        if (err) return res.send(err);
        return res.send(_user);
      });
    },
    getUsers: function getUsers(_req:any, res:any) {
      User.find((err:any, books:any) => {
        if (err) {
          return res.send(err);
        }
        return res.json(books);
      });
    }

  };
}

export default AuthController;

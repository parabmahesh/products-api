import logger from '../util/logger';
import User from '../models/user';

function AuthController() {
  return {
    login: function login(req:any, res:any) {
      logger.debug('AuthController.login');
      res.send(req.body);
    },
    signup: function name(req:any, res:any) {
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

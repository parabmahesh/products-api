import logger from '../util/logger';

function AuthController() {
  return {
    login: function login(req:any, res:any) {
      console.debug('AuthController', req.body);
      const user = req.body;
      req.login(user, () => {
        console.log('Successful login');
      });
      res.json(user);
    },
    signUp: function name(req:any, res:any) {
      logger.info('AuthController-signUp');
      res.json({});
    }
  };
}

export default AuthController;

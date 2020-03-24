function AuthController() {
  return {
    login: function login(req:any, res:any) {
      console.debug('AuthController', req.body);
      const user = req.body;
      req.login(user, () => {
        console.log('Successful login');
      });
      res.json(user);
    }
  };
}

export default AuthController;

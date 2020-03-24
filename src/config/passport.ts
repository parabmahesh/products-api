import passport from 'passport';

const passportConfig = function passportConfig(app:any) {
  app.use(passport.initialize());
  app.use(passport.session());

  // Store user in session
  passport.serializeUser((user, done) => {
  });

  // Retreives user from session
  passport.deserializeUser((user, done) => {
  });
};

export default passportConfig;

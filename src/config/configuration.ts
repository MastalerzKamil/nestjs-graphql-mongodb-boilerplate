export default () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`[CONFIG] Loaded environment: ${process.env.NODE_ENV}`);
  }

  const config = {
    nodeEnv: process.env.NODE_ENV,
    mongodb: {
      moviesApp: process.env.MONGODB_MOVIES_APP,
    },
  };

  return config;
};

const env = process.env;

export const nodeEnv = env.NODE.ENV;

export default {
  port: env.PORT || 8080
};

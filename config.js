const env = process.env;

export const nodeEnv = env.NODE.ENV || 'development';

export default {
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0', //to bind to any ip address external computer included
  get serverUrl(){
    return `http://${this.host}:${this.port}`;
  }
};

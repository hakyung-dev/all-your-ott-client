const SERVER_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://ayoserver-env-1.eba-pmjh2j3t.ap-northeast-2.elasticbeanstalk.com/';

module.exports = { SERVER_URL };

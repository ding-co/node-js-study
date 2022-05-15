const cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('1분마다 작업이 실행됩니다.');
});

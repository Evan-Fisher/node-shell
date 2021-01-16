const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write(`\nprompt > `);
};

pwd(done);

ls(done);

cat(done);

curl(done);

const fs = require('fs');

module.exports = function (done) {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'ls') {
      fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
          done('Something went wrong!');
        } else {
          done(`\n${files.join('\n')}\n`);
        }
      });
    }
  });
};

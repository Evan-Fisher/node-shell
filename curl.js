const request = require('request');

module.exports = function (done) {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().split(' ');
    if (cmd[0].toString() === 'curl') {
      let url = cmd[1].toString().substring(0, cmd[1].length - 1);
      request(`${url}`, function (err, res, body) {
        done(
          `\n!BEG!-----------------------\n${body}\n!END!-----------------------\n`
        );
      });
    }
  });
};

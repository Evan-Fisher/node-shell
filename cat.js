const fs = require('fs');

module.exports = function () {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().split(' ');
    if (cmd[0].toString() === 'cat') {
      let fileN = cmd[1].toString().substring(0, cmd[1].length - 1);
      fs.readFile(`${fileN}`, 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });
    }
  });
};

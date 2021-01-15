const fs = require('fs');

// module.exports = function (file) {
//   fs.readFile(`${file}`, 'utf8', function (err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(data);
//   });
// };
module.exports = function () {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().split(' ');
    if (cmd[0] === 'cat') {
      fs.readFile(`${cmd[1]}`, 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });
    }
  });
};

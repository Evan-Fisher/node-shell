const fs = require('fs');

module.exports = function (file) {
  fs.readFile(`${file}`, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
};

// fs.readFile('./', 'utf8', function (err, data) {
//   if (err) {
//     return console.log(err);
//   } else {
//     process.stdout.write(data);
//     process.stdout.write(`\nprompt > `);
//   }
// });

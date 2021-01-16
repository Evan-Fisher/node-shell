process.stdout.write('prompt > ');

module.exports = function (done) {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd == 'pwd') {
      done(`\n${process.cwd()}%\n `);
    }
  });
};

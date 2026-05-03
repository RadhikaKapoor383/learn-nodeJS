var prompt = require('prompt');

prompt.start();

prompt.get(['name', 'username', 'email'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  name: ' + result.name);
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
});

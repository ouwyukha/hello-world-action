const fs = require('fs');
console.log('post');
fs.rmSync('~/data', { recursive: true, force: true });
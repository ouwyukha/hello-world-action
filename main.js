const fs = require('fs');
console.log('main');
fs.mkdirSync('~/data', { recursive: true });
fs.writeFileSync('~/data/data', 'data');
const data = fs.readFileSync('~/data/data');
console.log(data.toString());
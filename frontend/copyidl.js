// copyIdl.js
const fs = require('fs');
// const idl = require('../mysolanaapp/target/idl/mysolanaapp.json');
const idl = require('../target/idl/mysolanaapp.json');

fs.writeFileSync('./src/idl.json', JSON.stringify(idl));
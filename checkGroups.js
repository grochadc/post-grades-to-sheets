const db = require('./db.json')

console.log(Object.keys(db).filter(key => /^E1-\d+/.test(key)));

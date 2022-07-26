const { Pool } = require('pg');
const path = require('path');
const { dirname } = require('path')
const fs = require('fs/promises');
//we had await before fs.read
//need to add in safety feature after other features are developed 
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const _config = JSON.parse(await fs.readFile(path.join(__dirname, './models.config.json')));
// // const _config = (fs.readFile(path.join(__dirname, './models.config.json')))

const databaseUri = "postgres://phedfzcr:OuiH19-PWA7o08-LFt42cC6i9GyAJvBD@raja.db.elephantsql.com/phedfzcr"

const pool = new Pool({
    connectionString: databaseUri,
});

module.exports = {
    query: (text, params, callback) => {
        console.log('working query', text);
        return pool.query(text, params, callback)
    }
}

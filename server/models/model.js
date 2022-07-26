import { Pool } from 'pg';
import path from 'path';
import fs from 'fs/promises'


const _config = JSON.parse(await fs.readFile(path.join(__dirname, './models.config.json')))

const pool = new Pool({
    connectionString: _config.databaseUri,
});

module.exports = {
    query: (text, params, callback) => {
        console.log('working query', text);
        return pool.query(text, params, callback)
    }
}

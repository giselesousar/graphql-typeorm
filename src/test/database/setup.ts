
import { createConnection } from "typeorm";
import path from 'path';
require('dotenv/config');

const testConn = (drop: boolean = false) => {
    return createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: process.env.PASSWORD,
        database: 'databaseTest',
        entities: [
            path.join(__dirname, '..', '..', 'src/entity/**/**.ts')
        ],
        synchronize: drop,
        dropSchema: drop,
    });
};

testConn(true).then(() => process.exit());
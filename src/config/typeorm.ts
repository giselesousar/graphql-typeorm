import { createConnection } from 'typeorm';
import path from 'path';
require('dotenv/config');

export async function connection(){
    await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: process.env.PASSWORD,
        database: 'databaseTest',
        entities: [
            path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true
    });
    console.log("Database is connected")
}
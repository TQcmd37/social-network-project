import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'bwoetokro2y2uxh605at-mysql.services.clever-cloud.com', //ip
    user: 'uknwjgd8yvsnpk5q',
    password: 'jKUyNq0UTV2z3qhZzRyB',
    port: 3306,
    database: 'bwoetokro2y2uxh605at'
})




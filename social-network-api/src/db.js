import {createPool} from 'mysql2/promise'

// export const pool = createPool({
//     host: 'bwoetokro2y2uxh605at-mysql.services.clever-cloud.com', //ip
//     user: 'uknwjgd8yvsnpk5q',
//     password: 'jKUyNq0UTV2z3qhZzRyB',
//     port: 3306,
//     database: 'bwoetokro2y2uxh605at'
// })

export const pool = createPool({
    host: 'localhost', //ip
    user: 'root',
    password: 'eugenia11',
    port: 3306,
    database: 'social_network'
})


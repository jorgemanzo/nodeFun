// This was written by github.com/maccelerated
const mysql2 = require('mysql2/promise')

const {
  DB_USERNAME,
  DB_PASSWORD
} = process.env

const opts = {
  host: 'localhost',
  database: 'nodefun',
  user: DB_USERNAME,
  password: DB_PASSWORD
}

module.exports = async (query, params) => {
  const connection = await mysql2.createConnection(opts)
  const [rows, fields] = await connection.execute(query, params)
  await connection.end()
  return [rows, fields]
}

const connection = require("../config/database")

const getAllUsers = async () => {
  const [result, fields] = await connectionn.execute('SELECT * FROM Users')
  return result
}

module.exports = {
    getAllUsers
    }
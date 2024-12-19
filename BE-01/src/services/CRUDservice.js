const connection = require("../config/database")

const getAllUsers = async () => {
  const [result, fields] = await connection.execute('SELECT * FROM Users')
  return result
}

const getUserById = async (id) => {
  const [result, fields] = await connection.execute('SELECT * FROM Users WHERE id = ?', [id])
  return result
}

const createUser = async (email, name, city) => {
  const [result, fields] = await connection.execute('INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city])
  return result
}

const editUser = async (email, name, city, id) => {
  const [result, fields] = await connection.execute('UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?', [email, name, city, id])
  return result
}

const deleteUserById = async (id) => {
  const [result, fields] = await connection.execute('DELETE FROM Users WHERE id = ?', [id])
  return result
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUserById
}
const connection = require("../config/database")
const {
  getAllUsers
} = require("../services/CRUDservice")


const getHomePage = async (req, res) => {
  const result = await getAllUsers()
  return res.render('home.ejs', {
    users: result
  })
}

const getCreateUserPage = (req, res) => res.render('create.ejs')

const createUer = async (req, res) => {
  console.log("Check res", req.body)
  const {
    email,
    name,
    city
  } = req.body

  // connection.query('INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city], (error, results, fields) => {
  //   if (error) throw error
  //   console.log('The solution is: ', results)
  //   res.send('Create a new user successfully!')
  // })

  const [result, fields] = await connection.execute('INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city])
  console.log('The solution is: ', result)
  res.send('Create a new user successfully!')
}
module.exports = {
  getHomePage,
  createUer,
  getCreateUserPage
}
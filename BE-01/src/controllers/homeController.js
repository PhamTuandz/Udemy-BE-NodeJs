const connection = require("../config/database")
const {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUserById
} = require("../services/CRUDservice")


const getHomePage = async (req, res) => {
  const result = await getAllUsers()
  return res.render('home.ejs', {
    users: result
  })
}

const getCreateUserPage = (req, res) => res.render('create.ejs')

const addUser = async (req, res) => {
  console.log("Check res", req.body)
  const {
    email,
    name,
    city
  } = req.body

  await createUser(email, name, city)

  res.send('Create a new user successfully!')
}

const getEditUserPage = async (req, res) => {
  const userId = req.params.id
  const result = await getUserById(userId)
  if (result.length === 0) {
    return res.send('User not found!')
  }
  return res.render('edit.ejs', {
    user: result[0]
  })
}

const updateUser = async (req, res) => {
  const {
    email,
    name,
    city,
    id
  } = req.body
  editUser(email, name, city, id)
  res.redirect('/')
}

const deleteUser = async (req, res) => {
  const userId = req.params.id

  await deleteUserById(userId)
  res.redirect('/')
}
module.exports = {
  getHomePage,
  addUser,
  getCreateUserPage,
  getEditUserPage,
  updateUser,
  deleteUser
}
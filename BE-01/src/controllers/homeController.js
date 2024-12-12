const getHomePage = (req, res) => {
  return res.render('home.ejs')
}

const createUer = (req, res) => {
  console.log("Check res", res.body)
  return res.send('Create a new usẻr')
}
module.exports = {
  getHomePage,
  createUer
}
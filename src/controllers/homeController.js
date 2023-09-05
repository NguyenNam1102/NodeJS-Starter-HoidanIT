const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDServices')

const getHomepage = async (req, res) => {
    let results = await getAllUsers()
    return res.render('home.ejs', { listUsers: results })
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body
    // connection.query(
    //     ` INSERT INTO Users (email, name, city) 
    //         VALUES(?, ?, ?) `,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Created user succeed!')
    //     }
    // );

    let [results, fields] = await connection.query(
        ` INSERT INTO Users (email, name, city) VALUES(?, ?, ?) `, [email, name, city]
    );
    res.send('Created user succeed!')

    // connection.query(
    //     'SELECT * FROM Users u ',
    //     function (err, results, fields) {
    //         console.log('>>> result: ', results);
    //     }
    // );

    // const [results, fields] = await connection.query('SELECT * FROM Users u ')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let { email, name, city, userId } = req.body
    await updateUserById(email, city, name, userId)
    // res.send('Updated user succeed!')
    res.redirect('/')
}

module.exports = {
    getHomepage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
}
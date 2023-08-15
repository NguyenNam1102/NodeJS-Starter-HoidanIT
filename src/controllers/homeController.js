const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const postCreateUser = (req, res) => {
    console.log(req.body);
    let { email, name, city } = req.body

    connection.query(
        `INSERT INTO Users (email, name, city) 
            VALUES(?, ?, ?) `,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('Created user succeed!')
        }
    );
}

module.exports = {
    getHomepage,
    postCreateUser
}
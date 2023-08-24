const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const postCreateUser = async (req, res) => {
    console.log(req.body);

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

module.exports = {
    getHomepage,
    postCreateUser,
    getCreatePage
}
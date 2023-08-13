const connection = require('../config/database')

const getHomepage = (req, res) => {
    connection.query(
        'SELECT * FROM Users u ',
        function (err, results, fields) {
            console.log('>>> result: ', results);
            res.render('index.ejs')
        }
    );
}

module.exports = {
    getHomepage
}
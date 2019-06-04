'use strict'

//require controller
module.exports = function (app) {
    var bookController = require('../controllers/bookManagementController');

//enable CORS
app.use(function (req, res, next) {
    //CORS headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    
    //allow OPTIONS
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    return next();
});
    // app.all('*', function (req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "X-Requested-With, accept, origin, content-type");
    //     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    //     res.header("X-Powered-By", ' 3.2.1')
    //     res.header("Content-Type", "application/json;charset=utf-8");
    //     next();
    // });


//define routes

app.route('/categories')
.get(bookController.list_all_categories)
.post(bookController.create_a_category);

app.route('/categories/:categoryId')
.get(bookController.get_a_category);
// .put(bookController.update_a_category);

app.route('/categories/books/:categoryId')
.get(bookController.get_books_by_category)

app.route('/books')
.get(bookController.list_all_books)
.post(bookController.add_a_book);

app.route('/books/:bookId')
.get(bookController.view_bookDetails)
.put(bookController.edit_bookDetails)
.delete(bookController.delete_a_book);

};






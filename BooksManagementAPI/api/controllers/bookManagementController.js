'use strict';

//import mongoose and models
var mongoose=require('mongoose')
var Category=mongoose.model('Category');
var Book=mongoose.model('Book');

/*define CRUD functions and export each of the function*/

// list all categories
exports.list_all_categories=function(req,res,next){
    Category.find({},function(err,categories){
        if(err){
            res.send(err);
        }else{
          res.json(categories);
        }
        
    });
};
 
//add a new category
exports.create_a_category = function (req, res,next) {
    //let new_category = new Category(req.body);
    let new_category = new Category({'name':req.body.name});
    new_category.save(function (err, category) {
        if (err){
          res.send(err);
        }else{
          res.json(category);
        }          
      
    });
};

//get a category
exports.get_a_category=function(req,res,next){
  Category.findById(req.params.categoryId, function(err, category) {
    if (err){
      res.send(err);
    }else{
      res.json(category);
    }
    
  });
}


//list all books
  exports.list_all_books=function(req,res,next){
    Book.find({},function(err,books){
        if(err){ 
            res.send(err);
        }else{
          res.json(books);
        }
       
    });
};

//list books by category
exports.get_books_by_category = function (req, res,next) {
    Book.find({category:req.params.categoryId}, function (err, books) {
        if (err){
          res.send(err);
        }else{
          res.json(books);
        }   
        
    });
};

//view book details
exports.view_bookDetails = function(req, res,next) {
    Book.findById(req.params.bookId, function(err, book) {
      if (err){
        res.send(err);
      }else{
        res.json(book);
      }
      
    });
  };


//add a new book
exports.add_a_book = function (req, res,next) {
    let new_book = new Book(req.body);
    new_book.save(function (err, book) {
        if (err){
            res.send(err);
        }else{
          res.json(book);
        }
        
    });   
};


//edit book details
exports.edit_bookDetails = function(req, res) {
    Book.findOneAndUpdate({_id: req.params.bookId}, req.body, {new: true}, function(err, book) {
      if (err){
        res.send(err);
      }else{
        res.json(book);
      }
    });
  };


//delete a book
exports.delete_a_book = function(req, res) {
    Book.remove({
      _id: req.params.bookId
    }, function(err, book) {
      if (err){
        res.send(err);
      }else{
        res.json({ message: 'Book is successfully deleted' });
      }
    });
  };





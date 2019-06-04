'use strict';

//require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//set up schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    ISBN: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    publisher: {
        type: String,
        required: true
    },
    publicationDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    image: {
        type: String,
        //required: true
    },
    author: [{
        type:String,
        required:true
    }],
    category:
    {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

//export the schema
module.exports = mongoose.model('Book', BookSchema);
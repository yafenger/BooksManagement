'use strict';

//require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//set up schema
var CategorySchema = new Schema({
    name: {
        type: String,
        required:'Kindly input the category name',
    },
    // books:[
    //     {
    //         type:Schema.Types.ObjectId,
    //         ref:'Book'
    //     }
    // ]
});

//export the schema
module.exports = mongoose.model('Category', CategorySchema);
let express=require('express')
let app=express()
var port=process.env.PORT||3003

//connect to mongodb
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:20000/bookDB',{ useNewUrlParser: true });
//in case of the database connection error
let db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//import model
var Category=require('./api/models/categoryModel');
var Book=require('./api/models/bookModel');
//reuqire body-parser
var bodyParser=require('body-parser');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



//import route
var routes=require('./api/routes/bookManagementRoutes');
//register routes in server
routes(app);

app.listen(port,function(){
    console.log('Book management RESTful API server started on: ' + port);
});

app.use(function(req,res){
    res.status(404).send({url:req.originalUrl+'not found'})
});





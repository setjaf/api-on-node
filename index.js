var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    nano = require('nano'),
    index = require('index.html');



app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {  
   res.send(index);
});

app.use(router);

app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
});
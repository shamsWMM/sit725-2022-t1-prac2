var express = require('express');
const res = require('express/lib/response');
//personal note:  const { add } = require("nodemon/lib/rules");
var app = express();

app.use(express.static(__dirname + '/public'));

var port = 3000;
app.listen(port, () => { console.log("Hello, I'm listening to you from port", +port) })


//simple function to add two numbers n1 and n2
var addTwoNumbers = (n1, n2) => {
    var result = n1 + n2;
    return result;
}


app.get('/test', function (req, res) {
    var username = req.query.username;
    console.log('This is get request from ' + username);
    res.send('Responding to get request for ' + username);
})

app.get('/addTwoNumbers', (req, res) => {
    var n1 = parseInt(req.query.n1);
    var n2 = parseInt(req.query.n2);
    var result = addTwoNumbers(n1, n2);
    res.send('The result is: ' + result);

})

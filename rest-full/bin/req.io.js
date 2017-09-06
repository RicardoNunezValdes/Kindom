app = require('express.io')()
app.http().io()

// Broadcast the new visitor event on ready route.
app.io.route('ready', function(req) {
	console.log("SIIII")
    req.io.broadcast('new visitor')
})

app.get('/aqui/:variable',function (req,res) {
    req.io.broadcast('send:test',{variable:req.params.variable});
	res.send("SI");
})


// Send client html.
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/views/client.html')
})

app.listen(4090)
var express =   require(`express`)
var moment	=	require(`moment`)
var app = express()

app.get('/', function(req, res) {
    res.send(`Timestamp API`)
})

app.get('/:time', function(req, res) {
	// Parse date with moment.js
    var time = moment(req.params.time, ["X", "MMMM DD, YYYY"])
    
    // Set output.
    var outpTime = {
    	unix: time.isValid() ? time.format(`X`) : null,
    	natural: time.isValid() ? time.format(`MMMM DD, YYYY`) : null,
    }
    
    // Send output.
    res.send( JSON.stringify(outpTime))
})

app.listen(8080, function() {
    console.log('Example app listen on port 8080!')
})
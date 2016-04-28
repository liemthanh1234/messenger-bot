var express = require('express')
var app = express()

// index
app.get('/hello', function (req, res) {
	res.send('hello world i am a secret bot')
})

// for facebook verification
app.get('/webhook', function (req, res) {
	if (req.query['hub.verify_token'] === 'my_voice') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong validation token')
})

app.listen(process.env.PORT)


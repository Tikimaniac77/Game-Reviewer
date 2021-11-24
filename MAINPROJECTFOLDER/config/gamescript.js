const http = require('https');
const fs = require('fs')

require('dotenv').config();

let apiKey = process.env.APIKEY

const options = {
	"method": "GET",
	"hostname": "rawg-video-games-database.p.rapidapi.com",
	"port": null,
	"path": `/games?key=${apiKey}&page_size=1`,
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "d967d8d789mshcf9096b6d1521e9p130927jsnfeb3f35d6ba8",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
		// console.log(chunks);
	});
	
	res.on("end", function () {
		const farm = Buffer.concat(chunks);
		
		const cow = JSON.parse(farm);
		console.log(cow.results[0].name);
		
	});

	
});

req.end();

module.exports = http;
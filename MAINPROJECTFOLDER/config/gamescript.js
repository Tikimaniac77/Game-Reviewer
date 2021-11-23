const http = require("https");

const options = {
	"method": "GET",
	"hostname": "rawg-video-games-database.p.rapidapi.com",
	"port": null,
	"path": "/games",
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
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();

module.exports = http;
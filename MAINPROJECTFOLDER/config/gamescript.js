const http = require('https');
const fs = require('fs');
const { platform } = require('os');

require('dotenv').config();

let apiKey = process.env.APIKEY

const options = {
	"method": "GET",
	"hostname": "rawg-video-games-database.p.rapidapi.com",
	"port": null,
	"path": `/games?key=${apiKey}&page_size=5`,
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
		//console.log(cow.results);

		let resObj = []
		// let pens = []



		for(let i = 0; i < cow.results.length; i++) {

			let pen = []

			for( let j = 0; j < cow.results[i].platforms.length; j++){

				let lasso = cow.results[i].platforms[j].platform.name
				pen.push(lasso)
				
			}
			//console.log(pen)
			
			let bull =
				{
					name : cow.results[i].name,
					img : cow.results[i].background_image,
					rating: cow.results[i].rating,
					release_date: cow.results[i].released,
					// platforms: cow.results[i].platforms[2].platform.name
					platforms: pen
					//platforms: pens
				};

			resObj.push(bull)
			
			
		}
		//console.log(cow.results[i].platforms.forEach(element => console.log(element.platform.name)) )
		//console.log(resObj);
		
		fs.writeFileSync('./seeds/gameData.json', JSON.stringify(resObj), err => {
			if (err) throw err;
  			console.log('Saved!');
		});

		
	});

	
});

req.end();

module.exports = http;
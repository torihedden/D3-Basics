d3.csv('data/overwatch-playtime.csv', function(d) {
	return {
		hero: d.Hero,
		timePlayed: +d['Time Played']
	};
}).then(function(data) {
	console.log(data)
})
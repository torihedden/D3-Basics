var gameData = {
	config: {
		height: 100,
		width: 800,
		barWidth: 20,
		barOffset: 5
	},
	title: 'Hours Played on Overwatch Heroes'
}

d3.csv('data/overwatch-playtime.csv', function(d) {
	return {
		hero: d.Hero,
		timePlayed: +d['Time Played']
	};
}).then(function(overwatchData) {
	svg = d3.select('#overwatch-chart')
		.append('svg')
		.attr('width', gameData.config.width)
		.attr('height', gameData.config.height)

	svg.selectAll('rect').data(overwatchData)
		.enter().append('rect')
		.style('fill', 'red')
		.attr('width', gameData.config.barWidth)
		.attr('height', function(overwatchData) {
			return overwatchData.timePlayed;
		})
		.attr('x', function(overwatchData, i) {
			return i * (gameData.config.barWidth + gameData.config.barOffset);
		})
		.attr('y', function(overwatchData) {
			return gameData.config.height - overwatchData.timePlayed;
		})

	svg.append('text')
		.attr('x', 250)
		.attr('y', 20)
		.text(gameData.title)

});

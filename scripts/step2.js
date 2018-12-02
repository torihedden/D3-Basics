d3.select('#bar-chart')
	.append('svg')
	.attr('width', config.width)
	.attr('height', config.height)
	.style('border', 'solid 1px gray') // equivalent shorthand below in vanilla JS
	.selectAll('rect').data(data)
	.enter().append('rect')
	.style('fill', 'darkgray')
	.attr('width', config.barWidth)
	.attr('height', function(data) {
		return data * config.scaleFactor;
	})
	.attr('x', function(data, i) {
		return i * (config.barWidth + config.barOffset)
	})
	.attr('y', function(data) {
		return config.height - (config.scaleFactor * data);
	})
	.on('mouseover', function() {
		d3.select(this)
			.style('fill', 'blue')
	})

	.on('mouseout', function() {
		d3.select(this)
			.style('fill', 'darkgray')
	})



// document.getElementsByTagName("svg")[0].setAttribute("style", "border: solid 1px gray");
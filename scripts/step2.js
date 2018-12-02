d3.select('#bar-chart')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('border', 'solid 1px gray') // equivalent shorthand below in vanilla JS
	.selectAll('rect').data(data)
	.enter().append('rect')
	.style('fill', 'darkgray')
	.attr('width', barWidth)
	.attr('height', function(data) {
		return data * scaleFactor;
	})
	.attr('x', function(data, i) {
		return i * (barWidth + barOffset)
	})
	.attr('y', function(data) {
		return height - (scaleFactor * data);
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
var ProjectsView = Backbone.View.extend({
	el: '#projects-view',
	initialize: function(options) {
		_.bindAll(
			this,
			'drawScore'
		);
		this.projects = options.projects;
		this.projects.on('add', this.drawScore);
	},

	drawScore: function() {
			context.fillStyle = '#999';
			context.font = (canvas.height) + 'px Impact, sans-serif';
			context.textAlign = 'center';
			context.fillText(game.score, canvas.width / 2, canvas.height * 0.9);
		},
});

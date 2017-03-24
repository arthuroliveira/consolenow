module.exports = function(program) {
	'use strict';
	
	program
		.command('pull <name>')
		.description('Say hello to <name>')
		.action(function(name, command) {

			console.log('Hello ' + name);
			program.log(name);

		});
};

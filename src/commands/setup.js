var questions = require('../views/cli-questions/setup');

module.exports = function (program) {
    'use strict';

    program
        .command('setup')
        .description('Setup your project to pull and push records from the instance')
        .option('-t, --table-mapping', 'Table Mapping ')
        .option('-a, --auth', 'Authentication')
        .action(function (command) {

            if (!command.auth && !command.tableMapping) {
                questions.askFirstQuestion();
            }



            console.log(command.auth);
            console.log(command.tableMapping);
        });

};

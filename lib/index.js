const chalk = require('chalk');

/**
 * Starts the generation process
 */
const generate = function() {
    systemMessage('Magic started...');

    // TODO: Do something

    systemMessage('Magic finished...');
};


/**
 * Displays a system message in the console
 *
 * @param {string}  message Message to show in the console
 * @param {string}  level   Level of the message
 */
const systemMessage = function (message, level = 'notice') {
    switch (level) {
        case 'error':
            return console.log(
                chalk.red(message)
            );
        case 'success':
            return console.log(
                chalk.green(message)
            );
        default:
            return console.log(
                chalk.yellow(message)
            );
    }
};

exports.generate = generate;

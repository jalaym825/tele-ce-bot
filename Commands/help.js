const command = require('../Abstract/Command');

module.exports = class help extends command {
    constructor(...args) {
        super(...args, {
            name: 'help',
            description: 'send help menu',
        })
    }
    async run({ int, args }) {
        int.reply(`
type */* to get list of commands.

/help - sends help menu
/start - starts the bot
/code - sends you a code
/stats - sends you statistics of bot`, { parse_mode: 'Markdown' });
    }
}
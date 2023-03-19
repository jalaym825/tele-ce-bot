const command = require('../Abstract/Command');
const dataB = require('../data.json')

module.exports = class stats extends command {
    constructor(...args) {
        super(...args, {
            name: 'stats',
            description: 'provide statistics the bot',
        })
    }
    async run({ int }) {
        int.reply(`
Users: \`${dataB.users.length}\`
Total Files Requested: \`${dataB.files_requested}\`
Ram Usage: \`${this.bot.utils.formatBytes(process.memoryUsage().rss)}\`
Uptime: \`${this.bot.utils.formatTime(Date.now() - (this.bot.startedAt * 1000))}\`

Made by Yogi#0360 - [Repository](https://github.com/Yogi0360/tele-ce-bot)`, { parse_mode: 'Markdown' });
    }
}
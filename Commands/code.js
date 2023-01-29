const fs = require('fs');
const command = require('../Abstract/Command');

module.exports = class code extends command {
    constructor(...args) {
        super(...args, {
            name: 'code',
            description: 'sends a code, usage: /code <number>, example: /code 3.1',
        })
    }
    async run({ int, args }) {
        if (!this.bot.config['code-accessers'].includes(int.update.message.from.id)) return int.reply("This command is only accessible by my owner.")

        if (!args[0]) return int.reply("Provide me a valid code index number.\nExample:  `/code 1.2`", { parse_mode: 'Markdown' })
        let code = args[0].replaceAll('.', '_');
        if (!code) return int.reply("Which code do you want?")

        code = fs.readdirSync('./C_Practicals').filter(x => x.split('.')[0].toLocaleLowerCase() === code);

        if (code.length) {
            int.replyWithDocument({ source: `./C_Practicals/${code}` })
        } else int.reply("no code found. :(");
    }
}
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
        const code = args[0].replaceAll('.', '_');
        if (!code) return int.reply("Which code do you want?")

        const files = new Array();
        let folders = new Array('./C_Practicals');
        const completed = new Array();
        while (folders.length !== completed.length) {
            for (let folder of folders) {
                if (completed.includes(folder)) continue;
                if (fs.readdirSync(folder).length === fs.readdirSync(folder).filter(x => x.toLocaleLowerCase().endsWith('.c')).length && folder === folder[-1]) folders.length = 0;
                for (const file of fs.readdirSync(folder)) {
                    if (file.toLowerCase().endsWith('.c')) {
                        if (file.toLowerCase().includes(code)) files.push(`${folder}/${file}`);
                    } else folders.push(`${folder}/${file}`);
                }
                completed.push(folder)
            }
        }

        if (files.length) {
            for (const file of files) {
                int.replyWithDocument({ source: file })
            }
        } else int.reply("no code found. :(");
    }
}
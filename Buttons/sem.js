const button = require('../Abstract/Buttons');
const fs = require('fs');

const emojis = {
    BEEE: "💡",
    Maths: "🔢",
    CCP: "💻",
    ICT: "💾"
}
module.exports = class sem1 extends button {
    constructor(...args) {
        super(...args, {
            name: 'Semester 1',
        })
    }
    async run({ int }) {
        if (int.update.callback_query.data.split('/')[3]) return this.bot.keyBoardButtons.get('subject').run({ int });

        const path = int.update.callback_query.data;
        let buttons = new Array();
        fs.readdirSync(path).forEach(x => {
            buttons.push({ text: emojis[x] ? emojis[x] + " " + x : x, callback_data: int.update.callback_query.data + "/" + x })
        })
        let back = int.update.callback_query.data.split('/')
        back.pop()
        back = back.join("/")
        buttons = this.bot.utils.chunk(buttons, 3)
        int.reply('Select Subject.', {
            reply_markup: {
                inline_keyboard: [...buttons, [
                    { text: "🔙 Back", callback_data: back },
                    { text: "Cancel", callback_data: "delete" },
                    { text: '🔝 Main Menu', callback_data: './Material' }
                ]],
                resize_keyboard: true
            }
        })
    }
}
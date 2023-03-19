const command = require('../Abstract/Command');

module.exports = class start extends command {
    constructor(...args) {
        super(...args, {
            name: 'start',
            description: 'start using the bot',
        })
    }
    async run({ int }) {
        if (int.update.callback_query?.data.split('/')[2]) {
            return this.bot.keyBoardButtons.get('sem').run({ int });
        }

        const buttons = this.bot.utils.chunk(require('fs').readdirSync('./Material').map(x => { return { text: x.replace("Sem", "Semester"), callback_data: `./Material/${x}` } }), 3)
        int.reply('🔝 Main Menu', {
            reply_markup: {
                inline_keyboard: buttons,
                resize_keyboard: true
            },
        })
    }
}
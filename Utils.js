const fs = require('fs');
const { Context } = require('telegraf');

module.exports = class Utils {
    /**
     * 
     * @param {import('./Bot')} telegraf 
     */
    constructor(telegraf) {
        // super(telegraf)
        this.bot = telegraf;

    }
    /**
     * 
     * @param {Context} ctx 
     * @returns 
     */
    sendDoc(path, ctx) {
        const db = require('./DB.json')
        if (db[path]) {
            return ctx.replyWithDocument(db[path]);
        } else {
            ctx.sendDocument({ source: path }).then(msg => {
                db[path] = msg.document.file_id;
                fs.writeFile('./DB.json', JSON.stringify(db), () => { })
            })
        }
    }
    formatBytes(bytes) {
        const FORMATS = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
        let i = 0;
        while (1023 < bytes) {
            bytes /= 1024;
            ++i;
        }
        return (i ? bytes.toFixed(2) : bytes) + ' ' + FORMATS[i];
    }
    buildButtons() {
        let index = 0;
        for (const file of fs.readdirSync("./Buttons/")) {
            const path = `./Buttons/${file}`;
            delete require.cache[require.resolve(path)];
            const File = require(path);

            const button = new File(this.bot, file.toLowerCase().split('.js')[0]);

            this.bot.keyBoardButtons.set(button.id, button);
            index++;
        }
        console.log(`[Client] => Loaded ${index} Keyboard buttons!`)
        return this;
    }

    buildCommands() {
        let index = 0;
        for (const file of fs.readdirSync("./Commands/")) {
            const path = `./Commands/${file}`;
            delete require.cache[require.resolve(path)];
            const File = require(path);

            const command = new File(this.bot, file.toLowerCase().split('.js')[0]);

            this.bot.commands.set(file.toLowerCase().split('.js')[0], command);
            index++;
        }
        console.log(`[Client] => Loaded ${index} commands!`)
        return this;
    }

    initialize() {
        this.buildButtons();
        this.buildCommands();
        return this;
    }
    chunk(arr, size) {
        const temp = [];
        for (let i = 0; i < arr.length; i += size) {
            temp.push(arr.slice(i, i + size));
        }
        return temp;
    }
    isClass(input) {
        return typeof input === 'function' &&
            typeof input.prototype === 'object' &&
            input.toString().substring(0, 5) === 'class';
    }
}

// module.exports = async (bot) => {
//     bot.commands = new Map();
//     bot.buttons = new Map();
//     fs.readdirSync('./Commands').filter(x => x.toLowerCase().endsWith('.js')).forEach(x => bot.commands.set(x.split('.js')[0], require(`./Commands/${x}`)))
//     fs.readdirSync('./Buttons').filter(x => x.toLowerCase().endsWith('.js')).forEach(x => bot.buttons.set(x.split('.js')[0], require(`./Buttons/${x}`)))
//     return bot;
// }
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
    formatTime(milliseconds) {
        if (!Number(milliseconds) || milliseconds <= 0) return `0 seconds`
        if (!milliseconds || isNaN(milliseconds) || milliseconds <= 0) {
            throw new RangeError("Utils#formatTime(milliseconds: number) Milliseconds must be a number greater than 0");
        }
        const seconds = Math.floor((milliseconds / 1000) % 60);
        const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
        const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
        const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

        const d = days
            ? days === 1
                ? '1 day'
                : `${days} days`
            : null;
        const h = hours
            ? hours === 1
                ? '1 hour'
                : `${hours} hours`
            : null;
        const m = minutes
            ? minutes === 1
                ? '1 minute'
                : `${minutes} minutes`
            : null;
        const s = seconds
            ? seconds === 1
                ? '1 second'
                : `${seconds} seconds`
            : null;

        const time = [];
        if (d) time.push(d);
        if (h) time.push(h);
        if (m) time.push(m);
        if (s) time.push(s);

        return time.join(", ");
    }
}
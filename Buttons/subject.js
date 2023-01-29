const { Markup, Context } = require('telegraf')
const button = require('../Abstract/Buttons');
const fs = require('fs');
const obj = require('../Full_Forms');

module.exports = class sem1 extends button {
    constructor(...args) {
        super(...args, {
            name: 'Semester',
        })
    }
    /**
     * 
     * @param {Object} param0 
     * @param {Context} param0.int 
     * @returns 
     */
    async run({ int }) {
        const args = int.update.callback_query.data.split('/')

        if (args.length === 3) return this.menu(int)
        else if (args[args.length - 1].includes('.pdf')) {
            return this.bot.utils.sendDoc(int.update.callback_query.data, int)
        }
        else if (new Array('LN', 'CE', 'TT', 'PE').includes(args[args.length - 1])) return this.ln(int)
        else if (args[args.length - 1] === 'PYP') return this.pyp(int)
        else if (new Array('Internal', 'Final').includes(args[args.length - 1])) {
            return this.ypyp(int)
        } else if (new Array('Ass', 'QB', 'RB', 'SB', 'PL', 'HR').includes(args[args.length - 1])) {
            let source = int.update.callback_query.data
            fs.readdirSync(source).forEach(x => {
                if (x.endsWith('.pdf')||x.endsWith('.zip')) return this.bot.utils.sendDoc(`${source}/${x}`, int)
            })
        } else if (args[args.length - 3] === 'PYP') {
            let source = int.update.callback_query.data
            source = source.split('/').map(x => obj[x] ? obj[x] : x).join("/")
            return this.bot.utils.sendDoc(source, int)
        } else this.menu(int);
    }

    /**
     * @param {import('telegraf').Context} int 
     */
    async pyp(int) {
        let path = int.update.callback_query.data
        let back = path.split('/')
        back.pop()
        back = back.join("/")
        let main = path.split('/')
        main = main.splice(0, 3)
        main = main.join("/")
        const exams = fs.readdirSync(path)
        let buttons = exams.map(x => {
            return { text: x, callback_data: path + '/' + x }
        })
        buttons = this.bot.utils.chunk(buttons, 3)
        int.reply("Select exam", {
            reply_markup: {
                inline_keyboard: [...buttons, [
                    { text: '🔙 Back', callback_data: back },
                    { text: 'Cancel', callback_data: 'delete' },
                    { text: '🔝 Main Menu', callback_data: main },
                ]], resize_keyboard: true
            }
        })
    }

    // years buttons
    ypyp(int) {
        const path = int.update.callback_query.data
        let buttons = fs.readdirSync(path).map((x, i) => {
            return { text: x.split(".pdf")[0].split("").slice(-2).join(""), callback_data: path + "/" + x }
        })
        buttons = this.bot.utils.chunk(buttons, 5)
        let back = int.update.callback_query.data.split('/')
        back.pop()
        back = back.join("/")
        let main = int.update.callback_query.data.split('/')
        main = main.splice(0, 3)
        main = main.join("/")
        int.reply('Select year!', {
            reply_markup: {
                inline_keyboard: [...buttons, [
                    Markup.button.callback('🔙 Back', back),
                    Markup.button.callback('Cancel', 'delete'),
                    Markup.button.callback('🔝 Main Menu', main),
                ]],
                resize_keyboard: true
            }
        })
    }
    //lecture notes
    async ln(int) {
        let buttons = new Array();
        let temp = new Array();
        const path = int.update.callback_query.data
        let chunk = this.bot.utils.chunk(fs.readdirSync(path).map(x => x.split('.pdf')[0].split("-").slice(-1)[0]).map(x => Number(x)).sort((x, y) => x - y).map(x => x.toString()).map(x => `Unit-${x}.pdf`), 5)

        for (let i = 0; i < chunk.length; i++) {
            temp = new Array();
            for (let j = 0; j < chunk[i].length; j++) {
                temp.push({ text: chunk[i][j].split('.pdf')[0].split('-').slice(-1)[0], callback_data: `${path}/${fs.readdirSync(path).filter(x => x.includes(chunk[i][j]))[0]}` })
            }
            buttons.push(temp)
        }
        let back = path.split('/')
        back.pop()
        back = back.join("/")
        let main = path.split('/')
        main = main.splice(0, 3)
        main = main.join("/")
        int.reply('Which unit?', {
            reply_markup: {
                inline_keyboard: [...buttons, [
                    Markup.button.callback('🔙 Back', back),
                    Markup.button.callback('Cancel', 'delete'),
                    Markup.button.callback('🔝 Main Menu', main),
                ]],
                resize_keyboard: true
            }
        })
    }

    //lecture notes
    async hr(int) {
        let buttons = new Array();
        let temp = new Array();
        const path = int.update.callback_query.data
        let chunk = this.bot.utils.chunk(fs.readdirSync(path).map(x => x.split('.c')[0]), 5)

        for (let i = 0; i < chunk.length; i++) {
            temp = new Array();
            for (let j = 0; j < chunk[i].length; j++) {
                temp.push({ text: chunk[i][j].split('.c')[0], callback_data: `${path}/${fs.readdirSync(path).filter(x => x.includes(chunk[i][j]))[0]}` })
            }
            buttons.push(temp)
        }
        let back = path.split('/')
        back.pop()
        back = back.join("/")
        let main = path.split('/')
        main = main.splice(0, 3)
        main = main.join("/")
        console.log('HR');
        int.reply('Which unit?', {
            reply_markup: {
                inline_keyboard: [...buttons, [
                    Markup.button.callback('🔙 Back', back),
                    Markup.button.callback('Cancel', 'delete'),
                    Markup.button.callback('🔝 Main Menu', main),
                ]],
                resize_keyboard: true
            }
        })
    }

    /**
     * 
     * @param {import('telegraf').Context} int 
     */
    async menu(int) {
        const cats = fs.readdirSync(int.update.callback_query.data)
        let buttons = cats.map(x => {
            return { text: obj[x], callback_data: `${int.update.callback_query.data}/${x}` }
        })
        let back = int.update.callback_query.data.split('/')
        back.pop()
        back = back.join("/")
        buttons = this.bot.utils.chunk(buttons, 3)
        let main = int.update.callback_query.data.split('/')
        main = main.splice(0, 3)
        main = main.join("/")
        int.reply('Which type of material do you want?', {
            reply_markup: {
                inline_keyboard: [...buttons, [
                    { text: "🔙 Back", callback_data: back },
                    { text: "Cancel", callback_data: "delete" },
                    { text: '🔝 Main Menu', callback_data: main }
                ]],
                resize_keyboard: true
            }
        })

    }
}
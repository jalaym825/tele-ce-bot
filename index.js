const Bot = require('./Bot')
const { token } = require('./config.json')
const fs = require('fs');
const bot = new Bot(token);
const dataB = require("./data.json");

/**
 * 
 * @param {import('telegraf').Context} int 
 * @param {*} data 
 */
const log = (int, data) => {
    if (!dataB.users.includes(int.from.id)) dataB.users.push(int.from.id);
    dataB.files_requested++;
    fs.writeFile('./data.json', JSON.stringify(dataB), () => { })
    console.log(`${int.from.first_name}${int.from.last_name ? ` ${int.from.last_name}` : ""} requested ${data.split("/").slice(-1)}`)
}

bot.keyBoardButtons.forEach(button => {
    //for keyboard buttons, which are included in keyboard
    bot.hears(button.name, async int => {
        if (int.update.message.date < bot.startedAt) return;
        button.run({ int });
    })
})

new Array(...require('./buttons.json')).forEach(button => {
    //for inline keyboard buttons, which are included with messsage
    bot.action(button, async int => {
        if (int.update.callback_query.message.date < bot.startedAt) return;
        if (button === 'delete') return int.deleteMessage().catch(_e => null);
        if (!int.update.callback_query.data.includes('.pdf')) int.deleteMessage().catch(_e => null);

        bot.commands.get('start').run({ int });
        if (int.update.callback_query.data.includes('.pdf')) log(int, int.update.callback_query.data);
    })
})


bot.commands.forEach(command => {
    //for slash commands
    bot.command(command.name, int => {
        if (int.update.message.date < bot.startedAt) return;

        if (int.from.id != bot.config.owner) {
            if (!bot.cooldowns.has(command.name)) {
                bot.cooldowns.set(command.name, new Map());
            }
            const now = Date.now();
            const timestamps = bot.cooldowns.get(command.name);
            if (timestamps.has(int.from.id)) {
                const expirationTime = timestamps.get(int.from.id) + 1000;
                if (now < expirationTime) return;
            }
        }

        const [, ...args] = int.update.message.text.slice(1).trim().split(/ +/g);

        command.run({ int, args });
    })
})

bot.on('message', async msg => {
    if (msg.update.message.date < bot.startedAt) return;

    if (bot.commands.has(msg.update.message.text) && msg.update.message.text.startsWith('/')) return;
    if (msg.from.id != bot.config.owner) {
        if (!bot.cooldowns.has('message')) {
            bot.cooldowns.set('message', new Map());
        }
        const now = Date.now();
        const timestamps = bot.cooldowns.get('message');
        if (timestamps.has(msg.from.id)) {
            const expirationTime = timestamps.get(msg.from.id) + 1000;
            if (now < expirationTime) return;
        }
    }
    msg.reply(`Send /help to get help.\nSend /start for materials.`, { parse_mode: 'Markdown' })
})

bot.launch().then(() => {
    bot.startedAt = Math.round(Date.now() / 1000);
    const cmds = [];
    bot.commands.forEach(cmd => {
        cmds.push({command: cmd.name, description: cmd.description});
    })
    bot.telegram.setMyCommands(cmds)
    console.log(`${bot.botInfo?.username} is started!`)
})

bot.catch((err, int) => {
    console.log(`Ooops, encountered an error for ${int.updateType}`, err)
})

process.on('unhandledRejection', (error) => {
    console.error(error)
});
process.on("uncaughtException", (error, origin) => {
    const err = { error, origin }
    console.error(err);
})
process.on('uncaughtExceptionMonitor', (error, origin) => {
    const err = { error, origin }
    console.error(err);
});
process.on('exit', (error) => {
    console.error(error)
});

let path;
const files = new Array();
let folders = new Array('./Material');
const completed = new Array();
while (folders.length !== completed.length) {
    for (let folder of folders) {
        if (completed.includes(folder)) continue;
        if (fs.readdirSync(folder).length === fs.readdirSync(folder).filter(x => x.toLocaleLowerCase().endsWith('.pdf') || x.toLocaleLowerCase().endsWith('.c')).length && folder === folder[-1]) folders.length = 0;
        for (const file of fs.readdirSync(folder)) {
            if (file.toLowerCase().endsWith('.pdf') || file.toLowerCase().endsWith('.zip')) {
                path = `${folder}/${file}`
                files.push(path);
                path = path.split('/');
                path.pop();
                path = path.join('/') + '/back'
                if (!files.includes(path)) files.push(path)
            } else {
                path = `${folder}/${file}`
                files.push(path);
                path = path.split('/')
                path.pop()
                path = path.join('/') + '/back'
                if (!files.includes(path)) files.push(path)
                folders.push(`${folder}/${file}`);
            }
        }
        completed.push(folder);
    }
}

files.push('delete', './Material');

fs.writeFile('./buttons.json', JSON.stringify(files), () => { })
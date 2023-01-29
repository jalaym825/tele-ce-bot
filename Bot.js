const { Telegraf } = require('telegraf');
const utils = require('./Utils');
module.exports = class Bot extends Telegraf {
    constructor(options) {
        super(options)
        this.commands = new Map();
        this.keyBoardButtons = new Map();
        this.config = require('./config.json')
        this.cooldowns = new Map();
        this.utils = new utils(this).initialize();
    }
}
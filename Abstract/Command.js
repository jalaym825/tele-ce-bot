module.exports = class Command {
    /**
     * 
     * @param {import('../Bot')} bot 
     */
    constructor(bot, id, options = {}) {
        this.bot = bot;
        this.id = id;
        this.name = options.name;
        this.description = options.description;
    }
}
const ytdl = require("ytdl-core");

const strings = require("../strings.json");
const utils = require("../utils");


/** 
 * @description Play a song with the provided link
 * @param {Discord.Client} client the client thats runs the commands
 * @param {Discord.Message} message the command's message
 * @param {Array<String>}args args[0] must be a link
 */


module.exports.run = async (client, message, args) => {

    if (args[0] == "l") return message.channel.send("lublu gachi :3");

    if (args[0] == "s") return message.channel.send("lublu chlen gachi :3");

    if (args[0] == "p") return message.channel.send("@Gachimuchi, mozno pocelovat teb`a?? ^3^");
    return message.channel.send("lublu spermu v rotike ,:,");
};

module.exports.names = {
    list: ["nasrat", "n"]
};
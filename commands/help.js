const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'help',
    description: 'Bot Commands!',
    execute(message, args) {
        const helpEmbed = new Discord.RichEmbed()
        .setColor('#00ff99')
		    .setTitle('This is a helping text embed to understand the commands on Xhera Bot.')
		    .setAuthor('Xhera Bot', 'https://i.imgur.com/i76n4kR.png')
        .setDescription('Command prefix: -')
        .addBlankField()
		    .addField('Command: Server', 'This command returns the Server ID and the total member count. \nExmaple of use: "-server"')
        .addField('Command: Userinfo', 'This command returns the Users unique ID as well as their username. \nExample of use: "-userinfo"')
        .addField('Command: Kick', 'This command allows anyone who is admin or higher to kick users. Can only be used by admins. \nExample of use: "-kick @(User)" or "-kick<@(User ID)>"')
        .addField('Command: Ban', 'This command allows anyone who is admin or higher to ban users. Can only be used by admins. \nExample of use: "-ban @(User)" or "-ban<@(User ID)>"')
        .addField('Command: Prune', 'This command allows anyone who is admin or higher to bulk delete up to 100 messages. Can only be used by admins. \nExample of use: "-prune (message amount)"')
        .addField('Command: Info', 'This command shows a bunch of information about Xhera Bot. \nExample of use: "-info"')
        .addField('Command: Unban (WIP)', 'This command lets you unban a user from your server. Still being worked on since it currently crashes the bot. \nExample of use: "-unban @(User)" or "-unban<@(User ID)>"')
        .addField('Command: React', 'This command makes the bot react with 4 custom emotes to your message. \nExample of use: "-react"')
        .addField('Command: Avatar', 'This command grabs a users profile picture and sends it in the chat. \nExample of use: "-avatar" or "-avatar @(User)"')
        .addField('Command: Hug, Poke, Headpat, Slap', 'This command allows a user to interact with another user through the ultimate power of online headpatting and more. \nExample of use: -headpat @(User) or -hug <"(User ID)>')
        .addField('Command: Roles (WIP)', `This command is used for assigning roles to a user through message reactions. Note that this only works on Xhera's server for now. \n Example of user: "-roles"` )
		    .setTimestamp()
		    .setFooter('© 2019 Xhera', 'https://i.imgur.com/aiYAPaF.jpg');
      message.channel.send(helpEmbed);
    },
};
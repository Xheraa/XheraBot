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
		    .addField('Command: Serverinfo', 'This command returns the Server ID and the total member count. \nExmaple of use: "-serverinfo"')
            .addField('Command: Userinfo', 'This command returns the either your own or the pinged Users unique ID as well as other info. \nExample of use: "-userinfo" or "-userinfo @(User)"')
            .addField('Command: Kick', 'This command allows anyone who is admin or higher to kick users. Can only be used by admins. \nExample of use: "-kick @(User)" or "-kick<@(User ID)>"')
            .addField('Command: Ban', 'This command allows anyone who is admin or higher to ban users. Can only be used by admins. \nExample of use: "-ban @(User)" or "-ban<@(User ID)>"')
            .addField('Command: Prune', 'This command allows anyone who is admin or higher to bulk delete up to 100 messages. Can only be used by admins. \nExample of use: "-prune (message amount)"')
            .addField('Command: Info', 'This command shows a bunch of information about Xhera Bot. \nExample of use: "-info"')
            .addField('Command: Unban (Disabled)', 'This command lets you unban a user from your server. Still being worked on since it currently crashes the bot. \nExample of use: "-unban @(User)" or "-unban<@(User ID)>"')
            .addField('Command: React', 'This command makes the bot react with 4 custom emotes to your message. Purely for testing purposes. \nExample of use: "-react"')
            .addField('Command: Avatar', 'This command grabs a users profile picture and sends it in the chat. \nExample of use: "-avatar" or "-avatar @(User)"')
            .addField('Command: Hug, Poke, Headpat, Slap', 'These commands allow a user to interact with another user through the ultimate power of online headpatting and more. \nExample of use: "-headpat @(User)" or -hug <"(User ID)>')
            .addField('Command: Roles (Disabled)', `This command is used for assigning roles to a user through message reactions. Note that this only works on Xhera's server for now. \n Example of user: "-roles"` )
            .addField('Command: Randomwaifu', 'This command selects a random waifu from a selected list of them! \nExample of use: "-randomwaifu"')
            .addField('Command: Waifugame (Disabled/WIP)', 'This command picks a random waifu and you then have 20 seconds to guess their name. \nExample of use: "-waifugame"')
		    .setTimestamp()
		    .setFooter('© 2019 Xhera', 'https://i.imgur.com/aiYAPaF.jpg');
      message.channel.send(helpEmbed);
    },
};
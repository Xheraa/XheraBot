const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'userinfo',
    description: 'Info about user!',
    execute(message, args) {
        if (!message.mentions.users.size) {
            const ownUserEmbed = new Discord.RichEmbed()
            .setTitle(`Your User Data:`)
            .setColor(`#00ffff`)
            .setThumbnail(`${message.author.displayAvatarURL}`)
            .addField(`Your Username:`, `${message.author.username}`)
            .addField(`Your current Discord tag:`, `${message.author.discriminator}`)
            .addField(`Your User ID:`, `${message.author.id}`)
            .addField(`Account created on:`, `${message.author.createdAt}`)
            .addField(`Joined server:`, `${message.guild.joinedAt}`)
            .setTimestamp()
		    .setFooter('© 2019 Xhera', 'https://i.imgur.com/aiYAPaF.jpg');
            message.channel.send(ownUserEmbed);
        }   const avatarList = message.mentions.users.map(user => {
            const otherUserEmbed = new Discord.RichEmbed()
                .setTitle(`User Data for ${user.username}:`)
                .setColor(`#00fffff`)
                .setThumbnail(`${user.displayAvatarURL}`)
                .addField(`Username:`, `${user.tag}`)
                .addField(`User's Discord tag:`, `${user.discriminator}`)
                .addField(`User ID:`, `${user.id}`)
                .addField(`Account created on:`, `${user.createdAt}`)
                .addField(`Joined server:`, `To find out when you joined, put the command in without pinging anyone!`)
                .setTimestamp()
                .setFooter(`© 2019 Xhera`, "https://i.imgur.com/aiYAPaF.jpg");
                message.channel.send(otherUserEmbed);
        })
    },
};
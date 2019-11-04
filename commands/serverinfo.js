const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'serverinfo',
    description: 'Server Info!',
    execute(message, args) {
        const serverEmbed = new Discord.RichEmbed()
            .setTitle(`Server Info:`)
            .setDescription(`Called by: ${message.author.tag}`)
            .setThumbnail(`${message.guild.iconURL}`)
            .setColor(`#00ffff`)
            .addField(`Server name:`, `${message.guild.name}`)
            .addField(`Current members:`, `${message.guild.memberCount}`)
            .addField(`Server creation date:`, `${message.guild.createdAt}`)
            .addField(`User join date:`, `${message.guild.joinedAt}`)
            .addField(`Server ID:`, `${message.guild.id}`)
            .addField(`Server owner:`, `${message.guild.owner}`)
            .addField(`Server region:`, `${message.guild.region}`)
            .setTimestamp()
		    .setFooter('© 2019 Xhera', 'https://i.imgur.com/aiYAPaF.jpg');
            message.channel.send(serverEmbed);
    },
};
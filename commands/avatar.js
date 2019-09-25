const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'avatar',
    description: 'Display Users Avatar!',
    execute(message, args) {
        // Makes sure no user is tagged / pinged.
        if (!message.mentions.users.size) {
            // Creates the embed and puts Title, Color and Image.
            const ownAvatarEmbed = new Discord.RichEmbed()
            .setTitle(`Your avatar:`)
            .setColor('#00ffff')
            // ${message.author.displayAvatarURL} makes it so it's the individual typing the
            // command that's getting their profile picture returned instead of just me.
            .setImage(`${message.author.displayAvatarURL}`);
          // Sends the embed in the channel the command was sent in.
          message.channel.send(ownAvatarEmbed);
        }
            // Grabs all users' profile pictures.
            const avatarList = message.mentions.users.map(user => {
            const userAvatarEmbed = new Discord.RichEmbed()
              .setTitle(`${user.username}'s avatar:`)
              .setColor('#00ffff')
              // ${user.displayAvatarURL} makes it so it's the person getting tagged
              // who's profile picture will show up instead of the person typing the command.
              .setImage(`${user.displayAvatarURL}`);
            message.channel.send(userAvatarEmbed);
          })
    },
};
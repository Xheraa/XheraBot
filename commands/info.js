const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'info',
    description: 'Info About Xhera!',
    execute(message, args) {
         // Creates an embed, this uses all the examples you can have for an embed.
    const infoEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Bot created by Xhera')
    .setURL('https://www.youtube.com/Xhera')
    .setAuthor('Xhera', 'https://i.imgur.com/i76n4kR.png', 'https://discord.js.org')
    .setDescription('This bot is made for fun and is non-profitable.')
    .setThumbnail('https://i.imgur.com/FOQrYOC.png')
    .addField('Info about this bot:', 'This bot was made as a fun small project in my free time. I just wanted to make something since i was bored one day and this is the result!')
    .addBlankField()
    .addField('Xhera´s YouTube:', 'https://www.youtube.com/Xhera', true)
    .addField('Xhera´s Twitter:', 'https://twitter.com/xheraaaa', true)
    .addField('Xhera´s Discord Server:', 'https://discord.gg/CPnMhmZ', true)
    .setImage('https://i.imgur.com/39VHeH4.png')
    .setTimestamp()
    .setFooter('© 2019 Xhera', 'https://i.imgur.com/aiYAPaF.jpg');
    
    message.channel.send(infoEmbed);
    },
};
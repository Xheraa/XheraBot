const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'roles',
    description: 'Role Assignment!',
    execute(message, args) {
                   
    const weebRole = message.guild.roles.get('547112333508608003'); // Weeb role
    const gamerRole = message.guild.roles.get('547112246770401298'); // Gamer role
    
  const filter = (reaction, user) => ['608232675450421248', '🎮'].includes(reaction.emoji.name) && user.id === message.author.id;

  const roleEmbed = new Discord.RichEmbed()
      .setTitle(`Role assignment - ${message.author.username}`)
      .setDescription(`
      
      <a:ahegao:608232675450421248> ${weebRole.toString()}
      🎮 ${gamerRole.toString()}

      `)
      .setColor("#00ff99")
      .setTimestamp()
      .setFooter('© 2019 Xhera', 'https://i.imgur.com/aiYAPaF.jpg');
      
  message.channel.send(roleEmbed).then(async msg => {

      await msg.react('608232675450421248');
      await msg.react('🎮');

      msg.awaitReactions(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
      }).then(collected => {

          const reaction = collected.first();

          switch (reaction.emoji.name) {
              case '<ahegao:608232675450421248>':
                if (message.member.roles.has(weebRole.id)) {
                  return message.channel.send('You are already in this role!')
              }
              message.member.addRole(weebRole).catch(err => {
                  console.log(err);
                  return message.channel.send(`Error adding you to this role: **${err.message}**.`);
              });
              message.channel.send(`You have been added to the **${weebRole.name}** role!`)
              break; 
              case '🎮':
                  if (message.member.roles.has(gamerRole.id)) {
                      return message.reply('You are already in this role!')
                  }
                  message.member.addRole(gamerRole).catch(err => {
                      console.log(err);
                      return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                  });
                  message.reply(`You have been added to the **${gamerRole.name}** role!`)
                  break; 
          }
      }).catch(collected => {
          return message.channel.send(`No role selected!`);
      })
    })
    },
};
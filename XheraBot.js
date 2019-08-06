const Discord = require("discord.js");
const {prefix, token} = require('./config.json');

const client = new Discord.Client();

// Console logging for starting up the bot
client.on("ready", () => {
  // Types out a connection message
  console.log("Bot is online!");
  // List servers the bot is connected to
  console.log("Servers:")
  client.guilds.forEach((guild) => {
      console.log(" - " + guild.name)
  })

  var generalChannel = client.channels.get("573540197564809217") // Replace with known channel ID
    generalChannel.send("Yes hello i'm alive")
  // Set bot status to: "Playing with JavaScript"
  client.user.setActivity("Anime", {type: "WATCHING"})

  // Alternatively, you can set the activity to any of the following:
  // PLAYING, STREAMING, LISTENING, WATCHING
  // For example:
  // client.user.setActivity("TV", {type: "WATCHING"})
});

// Console logging for bot going offline.
client.on("disconnect", () => console.log('Bot has been disconnected.'));

// Console logging for bot attempting to reconnect.
client.on("reconnect", () => console.log('Attempting to reconnect...'));

// Checks all messages being sent in chats where the bot can read
client.on('message', message => {
  // Checks if message is sent by a bot, if it is then it stops.
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // ${prefix} checks for the prefix on all messages
  // Simple response to the prefix followed by "ping", bot says "Pong."
  // Finished but might be removed - not very useful
  if (command === "ping") {
    message.channel.send('Pong.');

    // Simple command replying "Boop." to your beep
    // Finished but might be removed - not very useful
  } else if (message.content.startsWith(`${prefix}beep`)) {
    message.channel.send('Boop.');
    // Here, it grabs server name through ${message.guild.name}
    // It does a line change with /n after the first command
    // It then grabs the member count with ${message.guild.memberCount}

    // Server command - posts some info about the current server
    // Still WIP - want to add more details
  } else if (message.content === `${prefix}server`) {
    message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

    // Userinfo command - displays info about the user posting the command
    // Still WIP - want to add more info and display other users' info as well
    // Grabs username through ${message.author.username} and ID through ${message.author.id}
  } else if (message.content === `${prefix}userinfo`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);

    // Command for kicking users from your server without banning them.
    // Finished unless i do minor changes
  } else if (command === 'kick') {
    // Assuming we mention someone in the message, this will return the user
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
          // Check if they have one of many roles
          if(message.member.roles.some(r=>["Masive Nerd", "Epic Admins"].includes(r.name)) ) {
            // has one of the roles
            member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
              message.reply('I was unable to kick the member');
            // Log the error
              console.error(err);
          });
        } else {
          // has none of the roles
          message.reply("You can not kick members."); 
        } 
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }

    // Prune command for bulk deleting messages from 1 to 100 at a time.
    // Still WIP - need to fix so everyone can't use it
  } else if (command === 'prune') {
    const amount = parseInt(args[0]) + 1;
  
    if(message.member.roles.some(r=>["Masive Nerd", "Epic Admins", "Admin"].includes(r.name)) ) {
      // has one of the roles
      if (isNaN(amount)) {
        return message.reply('that doesn\'t seem to be a valid number.');
      } else if (amount <= 1 || amount >= 100) {
      return message.reply('you need to input a number between 1 and 100.');
      }
      message.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        message.channel.send('there was an error trying to prune messages in this channel!');
      });
    } else {
      // has none of the roles
     message.reply("You need to be an admin to delete messages with prune.");
    }

    // Info command - Displays info about me and shows what i do and what the bot is about.
    // Finished until i feel a need to update my info
  } else if (command === 'info') {
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

    // Simple test command for reactions. The bot can do normal, custom and even animated emotes
    // Finished but might get deleted - Just for testing so not very useful
  } else if (message.content === `${prefix}react`) {
      message.react('563278216429699082')
        .then(() => message.react('534714937767886858'))
        .then(() => message.react('557216753705287696'))
        .then(() => message.react('608232675450421248'))
        .catch(() => console.error('One of the emojis failed to react.'));

  // Avatar command for displaying your current or another users current avatar
  // Finished for now - don't feel the need to change anything for this.
  // Creates an embed for the avatars so they show up as images.
  } else if (command === 'avatar') {
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

    // Banning command - bans a user from the server.
    // Somewhat finished - i need to add an unbanning command
  } else if (command === 'ban') {
    // Assuming we mention someone in the message, this will return the user
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        // Check if they have one of many roles
        if(message.member.roles.some(r=>["Masive Nerd", "Epic Admins", "Admin"].includes(r.name)) ) {
          // has one of the roles
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
        } else {
          // has none of the roles
          message.reply("You can not ban members."); 
        } 
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('You didn\'t mention the user to ban!');
    }

  } else if (command === 'testban') {
    const checkAdmin = true
      if (checkAdmin)
    console.log ('This member can kick users');

  /*  Rainbow role mod - does not work yet
      Is supposed to make roles change colors automatically
      This is however against TOS so might not finish it
  // ID for my role: 534639211664506889
  } else if (command === "rainbow") {
    const role = "534639211664506889"
    */

    // Help command - Displays info for all commands and examples for how to use them
    // Layout is finished but need to keep updating as i add more commands
  } else if (command === "help") {
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
        .addField('Command: React (WIP)', 'This command makes the bot react with 3 custom emotes to your message. This will in the future make it able to give roles too. \nExample of use: "-react"')
        .addField('Command: Avatar', 'This command grabs a users profile picture and sends it in the chat. \nExample of use: "-avatar" or "-avatar @(User)"')
		    .setTimestamp()
		    .setFooter('© 2019 Xhera', 'https://i.imgur.com/aiYAPaF.jpg');
      message.channel.send(helpEmbed);

      // this command is just for fun since sed helped me get ideas for the bot lol
  } else if (command === 'sed') {
      message.channel.send("Is very triple epic");

      // Role assigning command - Makes an embed and prompts the user to react to the message to recieve a role.
      // Assigning roles does not work yet, but the bot does create an embed and adds the reactions on its own.
  } else if (command === "roles") {

      const weebRole = message.guild.roles.get('547112333508608003'); // Weeb role
      const gamerRole = message.guild.roles.get('547112246770401298'); // Gamer role
      
    const filter = (reaction, user) => ['608232675450421248', '🎮'].includes(reaction.emoji.name) && user.id === message.author.id;

    const roleEmbed = new Discord.RichEmbed()
        .setTitle('Role assignment')
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
                case '<a:ahegao:608232675450421248>':
                  message.reply("gayass");
                    if (message.member.roles.has(weebRole.id)) {
                        msg.delete(2000);
                        return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                    }
                    message.member.addRole(weebRole).catch(err => {
                        console.log(err);
                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                    });
                    message.channel.send(`You have been added to the **${weebRole.name}** role!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
                case '🎮':
                    if (message.member.roles.has(gamerRole.id)) {
                        msg.delete(2000);
                        return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                    }
                    message.member.addRole(gamerRole).catch(err => {
                        console.log(err);
                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                    });
                    message.channel.send(`You have been added to the **${gamerRole.name}** role!`).then(m => m.delete(3000));
                    msg.delete();
                    break; 
            }
        }).catch(collected => {
            return message.channel.send(`I couldn't add you to this role!`);
        })
      })

      // Unbanning command - unbans a user
      // Still WIP -- Does not work yet
    } else if (command === 'unban') {
      // Assuming we mention someone in the message, this will return the user
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Unban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          // Check if they have one of many roles
          if(message.member.roles.some(r=>["Masive Nerd", "Epic Admins", "Admin"].includes(r.name)) ) {
            // has one of the roles
            member.unban({
            }).then(() => {
              // We let the message author know we were able to ban the person
              message.reply(`Successfully unbanned ${user.tag}`);
            }).catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.reply('I was unable to unban the member');
              // Log the error
              console.error(err);
            });
          } else {
            // has none of the roles
            message.reply("You can not unban members."); 
          } 
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply('You didn\'t mention the user to unban!');
      }
    }
});

// Writes lines in the console for every reaction added by people on Discord messages.
client.on('messageReactionAdd', (reaction, user) => {
  console.log(`${user.username} added their "${reaction.emoji.name}" reaction.`)
});

// Writes lines in the console for every reaction removed by people on Discord messages.
client.on('messageReactionRemove', (reaction, user) => {
  console.log(`${user.username} removed their "${reaction.emoji.name}" reaction.`)
});

// Writes a welcome message in the channel assigned for every new member joining the server.
client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'new-members');
	if (!channel) return;

  // ${member} grabs the person joining instead of sending it to no one.
	channel.send(`Welcome to the server, ${member}!`);
});

client.login(token);
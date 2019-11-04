const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

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
    client.commands.get('ping').execute(message, args);

    // Simple command replying "Boop." to your beep
    // Finished but might be removed - not very useful
  } else if (command === "beep") {
    client.commands.get('beep').execute(message, args);

    // Here, it grabs server name through ${message.guild.name}
    // It does a line change with /n after the first command
    // It then grabs the member count with ${message.guild.memberCount}

    // Server command - posts some info about the current server
    // Still WIP - want to add more details
  } else if (command === "serverinfo") {
    client.commands.get('serverinfo').execute(message, args);

    // Userinfo command - displays info about the user posting the command
    // Still WIP - want to add more info and display other users' info as well
    // Grabs username through ${message.author.username} and ID through ${message.author.id}
  } else if (command === "userinfo") {
    client.commands.get('userinfo').execute(message, args);

    // Command for kicking users from your server without banning them.
    // Finished unless i do minor changes
  } else if (command === 'kick') {
    client.commands.get('kick').execute(message, args);

    // Prune command for bulk deleting messages from 1 to 100 at a time.
    // Still WIP - need to fix so everyone can't use it
  } else if (command === 'prune') {
    client.commands.get('prune').execute(message, args);

    // Info command - Displays info about me and shows what i do and what the bot is about.
    // Finished until i feel a need to update my info
  } else if (command === 'info') {
    client.commands.get('info').execute(message, args);

    // Simple test command for reactions. The bot can do normal, custom and even animated emotes
    // Finished but might get deleted - Just for testing so not very useful
  } else if (command === "react") {
    client.commands.get('react').execute(message, args);

  // Avatar command for displaying your current or another users current avatar
  // Finished for now - don't feel the need to change anything for this.
  // Creates an embed for the avatars so they show up as images.
  } else if (command === 'avatar') {
    client.commands.get('avatar').execute(message, args);

    // Banning command - bans a user from the server.
    // Somewhat finished - i need to add an unbanning command
  } else if (command === 'ban') {
    client.commands.get('ban').execute(message, args);

  } else if (command === 'testban') {
    client.commands.get('testban').execute(message, args);

  /*  
  Rainbow role mod - does not work yet
      Is supposed to make roles change colors automatically
      This is however against Discord's TOS so might not finish it
  // ID for my role: 534639211664506889
  } else if (command === "rainbow") {
    const role = "534639211664506889"
    */

    // Help command - Displays info for all commands and examples for how to use them
    // Layout is finished but need to keep updating as i add more commands
  } else if (command === "help") {
    client.commands.get('help').execute(message, args);

      // this command is just for fun since sed helped me get ideas for the bot lol
  } else if (command === 'sed') {
    client.commands.get('sed').execute(message, args);

      // Role assigning command - Makes an embed and prompts the user to react to the message to recieve a role.
      // Assigning roles does not work yet, but the bot does create an embed and adds the reactions on its own.
      // Assigning one role works, the other one does not. I don't know why ¯\_(ツ)_/¯
  } // else if (command === "roles") {
    // client.commands.get('roles').execute(message, args);

      
      // Unbanning command - unbans a user
      // Still WIP -- Does not work yet
       /* 
      } else if (command === 'unban') {
      // Assuming we mention someone in the message, this will return the user
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
           // Unban the member
           // Make sure you run this on a member, not a user!
           // There are big differences between a user and a member
          // Check if they have one of many roles
          if(message.member.roles.some(r=>["Masive Nerd", "Epic Admins", "Admin"].includes(r.name)) ) {
            // has one of the roles
            member.guild.unban({
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
    } */ else if (command === "randomwaifu") {
      client.commands.get('randomwaifu').execute(message, args); 
    }  else if (command === "hug") {
      client.commands.get('hug').execute(message, args);
    } else if (command === "poke") {
      client.commands.get('poke').execute(message, args);
    } else if (command === "headpat") {
      client.commands.get('headpat').execute(message, args);
    } else if (command === "slap") {
      client.commands.get('slap').execute(message, args);
    /* } else if (command === "song") {
      client.commands.get('song').execute(message, args); 
    */ } else if (command === "waifugame") {
      client.commands.get('waifugame').execute(message, args);
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
  const addRole = member.guild
	if (!channel) return;

  // ${member} grabs the person joining instead of sending it to no one.
	channel.send(`Welcome to the server, ${member}!`);
});

client.login(token);
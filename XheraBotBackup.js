const Discord = require("discord.js");
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
 
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

client.on('message', message => {
  // Checks if message is sent by a bot, if it is then it stops.
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // ${prefix} checks for the prefix on all messages
  // Simple response to the prefix followed by "ping", bot says "Pong."
  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send('Pong.');

  } else if (message.content.startsWith(`${prefix}beep`)) {
    message.channel.send('Boop.');
    // Here, it grabs server name through ${message.guild.name}
    // It does a line change with /n after the first command
    // It then grabs the member count with ${message.guild.memberCount}

  } else if (message.content === `${prefix}server`) {
    message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

    // Grabs username through ${message.author.username} and ID through ${message.author.id}
  } else if (message.content === `${prefix}userinfo`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);

  } else if (command === 'kick') {
    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to kick them!');
      // grab the "first" mentioned user from the message
      // this will return a `User` object, just like `message.author`
    } const taggedUser = message.mentions.users.first();
      message.channel.send(`You wanted to kick: ${taggedUser.username}`);

  } else if (command === 'avatar') {
    if (!message.mentions.users.size) {
      return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
    }
  
    const avatarList = message.mentions.users.map(user => {
      return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
    });
  
    // send the entire array of strings as a message
    // by default, discord.js will `.join()` the array with `\n`
    message.channel.send(avatarList);
  } else if (command === 'prune') {
    const amount = parseInt(args[0]) + 1;
  
    if (isNaN(amount)) {
      return message.reply('that doesn\'t seem to be a valid number.');
    } else if (amount <= 1 || amount > 100) {
    return message.reply('you need to input a number between 1 and 99.');
    }
    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send('there was an error trying to prune messages in this channel!');
    });

  } else if (command === 'info') {
    const exampleEmbed = new Discord.RichEmbed()
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

  message.channel.send(exampleEmbed);
  
  } else if (message.content === '-react') {
    Promise.all([
      message.react('563278216429699082'),
      message.react('534714937767886858'),
      message.react('557216753705287696'),
    ])
      .catch(() => console.error('One of the emojis failed to react.'));
  } 
});

client.on('messageReactionAdd', (reaction, user) => {
	console.log(`${user.username} reacted with "${reaction.emoji.name}".`);
});

client.on('messageReactionRemove', (reaction, user) => {
	console.log(`${user.username} removed their "${reaction.emoji.name}" reaction.`);
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'new-members');
	if (!channel) return;

	channel.send(`Welcome to the server, ${member}!`);
});

client.login(token);
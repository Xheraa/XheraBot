const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'waifugame',
    description: 'Guess the waifu!',
    execute(message, args) {
        const filter = m => m.content.includes("test");
        const collector = message.channel.createMessageCollector(filter, { time: 20000 });
        const rando_waifus = [
			'./Waifus/ZeroTwo1.jpg',
			'./Waifus/Tohsaka1.png',
			'./Waifus/Senjougahara1.png'

			]

			message.channel.send(`Guess this waifu! You have 20 seconds!`, {
				file: rando_waifus[Math.floor(Math.random() * rando_waifus.length)]
            });
        


        collector.on('collect', m => {
        	console.log(`Collected ${m.content}`);
        });

        collector.on('end', collected => {
        	message.channel.send(`${collected.size} correct guesses!`);
        });
    },
};
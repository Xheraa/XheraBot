module.exports = {
	name: 'poke',
	description: 'Poke People!',
	execute(message, args) {
		const rando_gifs = [
			'./GIFs/Poke/Poke1.gif',
			'./GIFs/Poke/Poke2.gif',
			'./GIFs/Poke/Poke3.gif',
			'./GIFs/Poke/Poke4.gif',
			'./GIFs/Poke/Poke5.gif',
			]

		if(message.mentions.members.size == 1) {
			let member = message.mentions.members.first()
			message.channel.send(`${message.author} poked ${member}!`, {
				file: rando_gifs[Math.floor(Math.random() * rando_gifs.length)]
			});
		} else if(message.mentions.members.size == 0) {
			message.channel.send(`You need to mention someone to poke!`);
		}
	},
};
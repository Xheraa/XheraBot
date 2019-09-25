module.exports = {
	name: 'slap',
	description: 'Slap People!',
	execute(message, args) {
		const rando_gifs = [
			'./GIFs/Slaps/Slap1.gif',
			'./GIFs/Slaps/Slap2.gif',
			'./GIFs/Slaps/Slap3.gif',
			'./GIFs/Slaps/Slap4.gif',
			'./GIFs/Slaps/Slap5.gif',
			'./GIFs/Slaps/Slap6.gif',
			]

		if(message.mentions.members.size == 1) {
			let member = message.mentions.members.first()
			message.channel.send(`${message.author} slapped ${member}!`, {
				file: rando_gifs[Math.floor(Math.random() * rando_gifs.length)]
			});
		} else if(message.mentions.members.size == 0) {
			message.channel.send(`You need to mention someone to slap!`);
		}
	},
};
module.exports = {
	name: 'headpat',
	description: 'Give Headpats!',
	execute(message, args) {
		const rando_gifs = [
			'./GIFs/Headpats/Headpat1.gif',
			'./GIFs/Headpats/Headpat2.gif',
			'./GIFs/Headpats/Headpat3.gif',
			'./GIFs/Headpats/Headpat4.gif',
			'./GIFs/Headpats/Headpat5.gif',
			'./GIFs/Headpats/Headpat6.gif',
			'./GIFs/Headpats/Headpat7.gif',
			]

		if(message.mentions.members.size == 1) {
			let member = message.mentions.members.first()
			message.channel.send(`${message.author} Gives ${member} headpats!`, {
				file: rando_gifs[Math.floor(Math.random() * rando_gifs.length)]
			});
		} else if(message.mentions.members.size == 0) {
			message.channel.send(`You need to mention someone to Headpat!`);
		}
	},
};
module.exports = {
	name: 'hug',
	description: 'Give Hugs!',
	execute(message, args) {
		const rando_gifs = [
			'./GIFs/Hugs/Hug1.gif',
			'./GIFs/Hugs/Hug2.gif',
			'./GIFs/Hugs/Hug3.gif',
			'./GIFs/Hugs/Hug4.gif',
			'./GIFs/Hugs/Hug5.gif',
			'./GIFs/Hugs/Hug6.gif',
			'./GIFs/Hugs/Hug7.gif',
			'./GIFs/Hugs/Hug8.gif',
			]

		if(message.mentions.members.size == 1) {
			let member = message.mentions.members.first()
			message.channel.send(`${message.author} gave ${member} a hug!`, {
				file: rando_gifs[Math.floor(Math.random() * rando_gifs.length)]
			});
		} else if(message.mentions.members.size == 0) {
			message.channel.send(`You need to mention someone to hug!`);
		}
	},
};
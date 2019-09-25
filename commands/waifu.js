module.exports = {
	name: 'waifu',
	description: 'Guess the waifu!',
	execute(message, args) {
		const rando_waifus = [
			'./Waifus/Megumin1.png',
			'./Waifus/Holo1.jpg',
			]

			message.channel.send(`Who is this waifu?`, {
				file: rando_waifus[Math.floor(Math.random() * rando_waifus.length)]
			});
			if (file == './Waifus/Megumin1.png') {
				const filter = m => m.content.startsWith('Megumin');
			}
	},
};
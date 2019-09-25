module.exports = {
    name: 'userinfo',
    description: 'Info about user!',
    execute(message, args) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    },
};
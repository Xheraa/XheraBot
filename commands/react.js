module.exports = {
    name: 'react',
    description: 'Message Reactions!',
    execute(message, args) {
        message.react('563278216429699082')
        .then(() => message.react('534714937767886858'))
        .then(() => message.react('557216753705287696'))
        .then(() => message.react('608232675450421248'))
        .catch(() => console.error('One of the emojis failed to react.'));
    },
};
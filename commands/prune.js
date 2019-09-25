module.exports = {
    name: 'prune',
    description: 'Bulk deleting messages!',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;
  
    if(message.member.roles.some(r=>["Masive Nerd", "Epic Admins", "Admin"].includes(r.name)) ) {
      // has one of the roles
      if (isNaN(amount)) {
        return message.reply('that doesn\'t seem to be a valid number.');
      } else if (amount <= 1 || amount >= 100) {
      return message.reply('you need to input a number between 1 and 100.');
      }
      message.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        message.channel.send('there was an error trying to prune messages in this channel!');
      });
    } else {
      // has none of the roles
     message.reply("You need to be an admin to delete messages with prune.");
    }
    },
};
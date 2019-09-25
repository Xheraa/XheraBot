module.exports = {
    name: 'ban',
    description: 'Ban Users!',
    execute(message, args) {
        // Assuming we mention someone in the message, this will return the user
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        // Check if they have one of many roles
        if(message.member.roles.some(r=>["Masive Nerd", "Epic Admins", "Admin"].includes(r.name)) ) {
          // has one of the roles
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
        } else {
          // has none of the roles
          message.reply("You can not ban members."); 
        } 
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('You didn\'t mention the user to ban!');
    }
    },
};
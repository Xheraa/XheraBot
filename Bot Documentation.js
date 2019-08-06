// Events
client.on("message", (message)) => {
    // This code runs when the event is triggered
}

// Example of message events
client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
      message.channel.send("pong!");
    } else
   
    if (message.content.startsWith("foo")) {
      message.channel.send("bar!");
    }
  });


// Setting preset for the bot
const prefix = "#";
client.on("message", message) => {
    //Exit and stop if prefix isn't there
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    } else
    if (message.content.startsWith(prefix + "foo")) {
        message.channel.send("bar!");
    }
});
// const prefix = "#"; is the preset set for the bot
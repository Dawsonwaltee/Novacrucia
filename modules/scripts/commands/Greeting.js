module.exports.config = {
    name: "greetingsbot", // command name
    author: "Dawson dev",
    version: "1.0",
    category: "response",
    description: "Responds to user greetings with a custom message",
    adminOnly: false, // accessible by all users
    usePrefix: true, // requires prefix for command execution
    cooldown: 5, // cooldown in seconds
};

module.exports.run = async function ({ event, args, api }) {
    try {
        const message = event.body.toLowerCase(); // Capture user's message and convert to lowercase

        // List of greetings to trigger the bot response
        const greetings = ["hi", "hello", "hey", "xup"];

        if (greetings.includes(message)) {
            await api.sendMessage(
                "Customs bot here, type in to get my service.", 
                event.threadID
            );
        }
    } catch (err) {
        console.error("Error responding to greeting:", err);
    }
};

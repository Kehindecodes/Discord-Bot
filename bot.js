const { Client, Intents } = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
require('dotenv').config();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('interactionCreate', async (interaction) => {
// 	if (!interaction.isCommand()) return;

// 	if (interaction.commandName === 'ping') {
// 		await interaction.reply('Pong!');
// 	}
// });
client.on('messageCreate', (msg) => {
	msg.content === 'ping' && msg.reply('howfar na');
});

client.login(process.env.DISCORD_TOKEN);

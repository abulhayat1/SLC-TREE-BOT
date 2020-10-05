// ================= START BOT CODE ===================
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!Sq'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const activities = require('./activity.json');

const client = new CommandoClient({
	commandPrefix: '?',
	owner: process.env.OWNER,
	invite: 'in slc #general',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['tree', 'event related commands'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
		help: false,
    eval: false,
	})
	// eslint-disable-next-line semi
	.registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	
  	// Interval to change activity every minute
	client.setInterval(() => {
		const activity = activities[Math.floor(Math.random() * activities.length)];
		const text = typeof activity.text === 'function' ? activity.text() : activity.text;
		client.user.setActivity(text, { type: activity.type });
	}, 20000);


});

client.on('error', console.error);

// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it 
// feature to hide the token we got earlier. 
client.login(process.env.DISCORD_TOKEN);


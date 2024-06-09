require("dotenv").config()
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('sends the user an invite link to invite this bot to their server'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Click here to invite the bot')
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=${process.env.clientId}&permissions=519232&scope=bot`)
			.setColor(0xFDB0C0)
            .setDescription('Bot made with love by elver ♡')
        await interaction.reply({ content:"sending invite link to dms", ephemeral: true});
		await interaction.user.send({ embeds: [embed] });
	},
};

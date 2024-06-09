const { SlashCommandBuilder, AttachmentBuilder, Emb} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('gets the avatar of a user, if no id/@ is provided, it will return the user\'s avatar')
		.addUserOption(option => 
			option.setName('target_user')
				.setDescription('User tag')),
	async execute(interaction) {
		const userTarget = interaction.options.getUser('target_user');
		let uri;
		let name;
		if (userTarget != null) {
			name = userTarget.username
			uri = `https://cdn.discordapp.com/avatars/${userTarget.id}/${userTarget.avatar}.png`;
		} else {
			const id = interaction.user.id;
			name = id
			const av = interaction.user.avatar;
			uri = `https://cdn.discordapp.com/avatars/${id}/${av}.png`;
		}
		
		const attachment = new AttachmentBuilder(uri, { name: 'avatar.png' });
		await interaction.reply({ files: [attachment] });
	},
};

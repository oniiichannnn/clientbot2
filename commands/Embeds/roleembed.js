const { MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
  name: 'roleembed',
  permissions: ["ADMINISTRATOR"],
  description: 'React',
  async execute(client, message, args, cmd, Discord) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("court-notification-add")
        .setLabel("✔️Add Role")
        .setStyle("SECONDARY"),
      new MessageButton()
        .setCustomId("court-notification-remove")
        .setLabel("❌ Remove Role")
        .setStyle("SECONDARY")
    );

    const embed = new Discord.MessageEmbed()
      .setColor('#ffd700')
      .setTitle('Court Case Notification Role')
      .setDescription('If you would like to receive notifications when there is a court case then press the button below.')
    message.channel.send({ embeds: [embed], components: [row] })
  }
}
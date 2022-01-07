const { MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
  name: 'reportticketembed',
  permissions: ["ADMINISTRATOR"],
  description: 'React',
  async execute(client, message, args, cmd, Discord) {
    let embed = new Discord.MessageEmbed()
      .setColor('#ffd700')
      .setTitle('Report A Lawyer')
      .setDescription("If you would like to report a lawyer then you have come to the right place.\n\nTo create a report ticket press the button below.")
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("report")
        .setLabel("🎫 Report Here")
        .setStyle("SECONDARY")
    );

    message.channel.send({ embeds: [embed], components: [row] });
  }
}
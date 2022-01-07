const { MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
  name: 'judgeticketembed',
  permissions: ["ADMINISTRATOR"],
  description: 'React',
  async execute(client, message, args, cmd, Discord) {
    let embed = new Discord.MessageEmbed()
      .setColor('#ffd700')
      .setTitle('Request A Judge')
      .setDescription("If you would like to request a judge then you have come to the right place.\n\n**Price:** £0\n\nTo request a judge press the button below.")
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("judge")
        .setLabel("‍⚖️ Request Here")
        .setStyle("SECONDARY")
    );

    message.channel.send({ embeds: [embed], components: [row] });
  }
}
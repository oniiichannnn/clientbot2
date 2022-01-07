const { MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: 'applyembed',
    permissions: ["ADMINISTRATOR"],
    description: '',
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setTitle('Apply')
            .setDescription('To join CMG Lawyers as a lawyer you will need to apply, below you can click on the button and it will take you to the application form.\n\n**Note:** Do not DM management about your application or it will be denied.')
            const row = new MessageActionRow().addComponents(
                new MessageButton()
                  .setLabel("📝 Lawyer Application")
                  .setURL("https://forms.gle/fcYMqJTJnEZyqgnw9")
                  .setStyle("LINK")
              );
              message.channel.send({ embeds: [newEmbed], components: [row] })
            .then((msg) => {
                setTimeout(() => message.delete(), 0);
            })
    }
}